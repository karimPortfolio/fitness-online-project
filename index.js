const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql");
const morgan = require("morgan");
const cors  = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const sessions = require("express-session");
const flash = require('connect-flash');
const usersRouter = require("./routes/authRoutes");
const homeRouter = require("./routes/homeRoutes");
const programRouter = require("./routes/programsRoutes");
const recipesRouter = require("./routes/recipesRoutes");
const notFoundRoute = require("./routes/notFoundRoutes");
const app = express();

//setup all the application middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors("*"));
app.use(morgan("dev"));
dotenv.config();


//use cookies and session
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}))

//flash messages
app.use(flash());

app.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
});

//use the public folder
app.use(express.static("public"));

//use ejs layouts and views
app.engine('ejs', require("express-ejs-extend"));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// setup the connection to MySQL databases local server
const db = mysql.createConnection({
    //get the connection information from .env file
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

db.connect( (err) => {

    //if the connection failed
    if (err) 
    {
        console.log(err.message);
        res.status(500).json({message:"Server run out"});
        return;
    }
    
    console.log("*** DATABASE CONNECTED ***");

    //all the application routes
    app.use("", homeRouter);
    app.use("", usersRouter);
    app.use("", programRouter);
    app.use("", recipesRouter);
    app.use("", notFoundRoute);

})


app.db = db;


//open the application server
app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));

