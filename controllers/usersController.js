
const bcrypt = require("bcrypt");
const cheerio = require("cheerio");


//filter the input values from html tags
function filterHtmlTags(input) {
    const $ = cheerio.load(input);
    return $.text();
}


exports.register = (req, res) => {
    try {

        //check if user send a empty strings values from the client
        if (req.body.firstName === "" || req.body.lastName === "" || req.body.email === ""
            || req.body.password === "" || req.body.passwordConfirm === "") {
            const response = {
                title: "Signup",
                failed: "All the information are required.",
                auth: false
            }
            return res.render("pages/auth/register", response);
        }

        if (req.body.password !== req.body.passwordConfirm) {
            const response = {
                title: "Signup",
                failed: "Password's must be the same.",
                auth: false
            }
            return res.render("pages/auth/register", response);
        }

        //get the filtered values
        const firstName = filterHtmlTags(req.body.firstName);
        const lastName = filterHtmlTags(req.body.lastName);
        const email = filterHtmlTags(req.body.email);
        const password = filterHtmlTags(req.body.password);
        const name = firstName + " " + lastName;
        const db = req.app.db;



        //check if the email already taken
        db.query("SELECT * FROM users WHERE email = ? ", email, async (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                const response = {
                    title: "Signup",
                    failed: "Aww! Something went wrong.",
                    auth: false
                }
                return res.render("pages/auth/register", response);
            }
            if (result.length > 0) {
                const response = {
                    title: "Signup",
                    failed: "This email has been already taken.",
                    auth: false
                }
                return res.render("pages/auth/register", response);
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            //create the account
            const values = [name, email, hashedPassword];
            db.query("INSERT INTO users(name, email, password) VALUES(?, ?, ?)", values, (err) => {
                if (err) {
                    console.log(err.sqlMessage);
                    const response = {
                        title: "Signup",
                        failed: "Aww! Something went wrong.",
                        auth: false
                    }
                    return res.render("pages/auth/register", response);
                }
                res.redirect("/login");
            })
        });
    }
    catch (err) {
        console.log(err.message);
        const response = {
            title: "Signup",
            failed: "Aww! Something went wrong.",
            auth: false
        }
        return res.render("pages/auth/register", response);
    }
}


exports.login = (req, res) => {
    try {
        //get filtered values
        const email = filterHtmlTags(req.body.email);
        const password = filterHtmlTags(req.body.password);

        //database connection
        const db = req.app.db;

        if (email === "" || password === "") {
            const response = {
                title: "Sign in",
                failed: "All the informations are required.",
                auth: true
            }
            return res.render("pages/auth/login", response);
        }

        //check if the email is exist
        db.query("SELECT * FROM users WHERE email = ? LIMIT 1", email, async (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                const response = {
                    title: "Sign in",
                    failed: "Aww! Something went wrong.",
                    auth: false
                }
                return res.render("pages/auth/login", response);
            }
            if (result.length === 0) {
                const response = {
                    title: "Sign in",
                    failed: "Email or password doesn't matched.",
                    auth: false
                }
                return res.render("pages/auth/login", response);
            }
            const isMatched = await bcrypt.compare(password, result[0].password);
            if (!isMatched) {
                const response = {
                    title: "Sign in",
                    failed: "Email or password doesn't matched.",
                    auth: false
                }
                return res.render("pages/auth/login", response);
            }
            req.session.userid = result[0].id;
            return res.redirect("/");
        })
    } catch (err) {
        console.log(err.message);
        const response = {
            title: "Sign in",
            failed: "Aww! Something went wrong.",
            auth: false
        }
        return res.render("pages/auth/login", response);
    }

}

//handle logout
exports.logout = (req, res) => {
    req.session.destroy();
    const response = {
        title: "Sign in",
        failed: null,
        auth: false
    }
    res.redirect("/login");
}

//render register page
exports.renderRegister = (req, res) => {
    const response = {
        title: "Signup",
        failed: null,
        success: null,
        auth: false
    }
    res.render("pages/auth/register", response);
}


//render login page
exports.renderLogin = (req, res) => {
    const response = {
        title: "Sign in",
        failed: null,
        sessionFlash: res.locals.sessionFlash,
        auth: false
    }
    console.log(response.sessionFlash);
    res.render("pages/auth/login", response);
}

exports.dashboard = (req, res) => {
    const user = req.user;
    let name = user.name.split(" ");
    name = name[0][0] + name[1][0];
    const db = req.app.db;

    const query = "SELECT * FROM programs JOIN users_programs ON programs.id = users_programs.program_id WHERE users_programs.user_id = ?";
    db.query(query, user.id, (err, result) => {
        if (err) {
            const response = {
                user: user,
                name: name,
                programs: null
            };
            return res.render("pages/dashboard", response);
        }
        if (result.length > 0) {

            result.forEach((res) => {
                const date = new Date(res.joined_at);
                const formattedDate = date.toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                });
                res.joined_at = formattedDate;
            })

            const response = {
                user: user,
                name: name,
                programs: result
            };
            res.render("pages/dashboard", response);
        }
        else
        {
            const response = {
                user: user,
                name: name,
                programs:null
            };
            res.render("pages/dashboard", response);
        }

    })

}
