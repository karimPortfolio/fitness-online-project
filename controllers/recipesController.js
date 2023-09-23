

exports.recipes = (req, res) => {

    //get user id from session
    const userid = req.session.userid;
    const db = req.app.db;


    if(typeof userid !== "undefined")
    {
        //get the auth user data usind the id stocked in session
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result) => {

            if (err) console.log(err.sqlMessage);

            //get all programs from db
            db.query("SELECT * FROM recipes", (err, result2) => {
                if (err) {
                    return res.render("pages/recipes", {auth:false, title:"Recipes", recipes:null});
                }
                let name = result[0].name.split(" ");
                name = name[0][0] + name[1][0];
                const response = {
                    title:"Recipes",
                    auth:true,
                    name:name,
                    user:result[0],
                    recipes:result2
                }
                return res.render("pages/recipes", response);
            })
        })
    }

    else
    {
        //get all programs from db
        db.query("SELECT * FROM recipes", (err, result2) => {
            if (err) {
                return res.render("pages/recipes", {auth:false, title:"Recipes", recipes:null});
            }
            const response = {
                title:"Recipes",
                auth:false,
                recipes:result2,
            }

            return res.render("pages/recipes", response);
        })
    }

}



exports.recipeDetails = (req, res) => {

    //get recipe id from request params
    const recipeid = req.params.id;

    //check if id not a number
    if (isNaN(recipeid)) return res.redirect("/recipes");

    //get user id from session
    const userid = req.session.userid;
    const db = req.app.db;

    if (typeof userid !== 'undefined')
    {
        //get the auth user data usind the id stocked in session
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result) => {

            if (err) console.log(err.sqlMessage);

            //get all programs from db
            const query = "SELECT * FROM recipes WHERE id = ?";
            db.query(query, recipeid, (err, result2) => {
                if (err) {
                    return res.redirect("/recipes");
                }
                let name = result[0].name.split(" ");
                name = name[0][0] + name[1][0];
                const response = {
                    title:`Recipes | ${result2[0].recipe}`,
                    auth:true,
                    name:name,
                    user:result[0],
                    recipe:result2[0]
                }
                return res.render("pages/recipeDetails", response);
            })
        })
    }

    else
    {
        //get all programs from db
        const query = "SELECT * FROM recipes WHERE id = ?";
        db.query(query, recipeid, (err, result) => {
            if (err) {
                return res.redirect("/recipes");
            }
            const response = {
                title:`Recipes | ${result[0].recipe}`,
                auth:false,
                recipe:result[0],
            }
            return res.render("pages/recipeDetails", response);
        })
    }

}

