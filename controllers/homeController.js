


exports.home = (req, res) => {
    const userid = req.session.userid;
    const db = req.app.db;
    if (typeof userid !== "undefined")
    {
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result1) => {
            if (err)
            {
                return res.render("pages/home", {title:"Home", auth:false, programs:null, recipes:null});
            }
            let name = result1[0].name.split(" ");
            name = name[0][0] + name[1][0];
            db.query("SELECT * FROM programs LIMIT 3", (err, result2) => {
                if (err)
                {
                    const response = {title:"Home", auth:true, user:result1[0], name:name, programs:null, recipes:null};
                    return res.render("pages/home", response);
                }
                
                db.query("SELECT * FROM recipes WHERE id = 2 OR id = 3 OR id = 6", (err, result3) => {
                    if (err)
                    {
                        const response = {title:"Home", auth:true, user:result1[0], name:name, programs:result2, recipes:null};
                        return res.render("pages/home", response);
                    }
                    const response = {title:"Home", auth:true, user:result1[0], name:name, programs:result2, recipes:result3};
                        return res.render("pages/home", response);
                })
            });
        }) 
    }
    else
    {

        db.query("SELECT * FROM programs LIMIT 3", (err, result2) => {
            if (err)
            {
                const response = {title:"Home", auth:false, programs:null, recipes:null};
                return res.render("pages/home", response);
            }
            
            db.query("SELECT * FROM recipes WHERE id = 2 OR id = 3 OR id = 6", (err, result3) => {
                if (err)
                {
                    const response = {title:"Home", auth:false, programs:result2, recipes:null};
                    return res.render("pages/home", response);
                }
                const response = {title:"Home", auth:false, programs:result2, recipes:result3};
                return res.render("pages/home", response);
            })
        });
    }
}


exports.search = (req, res) => {

    //get the search values from request query
    const search = req.query.s;
    
    const db = req.app.db;

    if (typeof userid !== "undefined")
    {
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result1) => {
            if (err)
            {
                return res.render("pages/search", {title:"Search", auth:false, results1:null, results2:null, search:search});
            }
            let name = result1[0].name.split(" ");
            name = name[0][0] + name[1][0];
            db.query("SELECT * FROM programs WHERE programme LIKE ?", "%"+search+"%", (err, result2) => {
                db.query("SELECT * FROM recipes WHERE recipe LIKE ?", "%"+search+"%", (err, result3) => {
                    const response = {title:"Search", auth:true, user:result1[0], name:name, results1:result2, results2:result3, search:search};
                    return res.render("pages/search", response);
                })
            });
        }) 
    }
    else
    {

        db.query("SELECT * FROM programs WHERE programme LIKE ?", "%"+search+"%", (err, result2) => {
            if (err)
            {
                console.log(err.sqlMessage);
            }
            
            db.query("SELECT * FROM recipes WHERE recipe LIKE ?", "%"+search+"%", (err, result3) => {
                if (err)
                {
                    console.log(err.sqlMessage)
                    const response = {title:"Search", auth:false, result1:null, results2:null};
                    return res.render("pages/search", response);
                }
                const response = {title:"Search", auth:false, results1:result2, results2:result3, search:search};
                return res.render("pages/search", response);
            })
        });
    }

}


