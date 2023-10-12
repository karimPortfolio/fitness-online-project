



exports.Auth = (req, res, next) => {

    //get the user id from session
    const userid = req.session.userid;

    if (typeof userid === "undefined") {
        req.session.sessionFlash = {
            type: 'failed',
            message: 'You need to login first to join our program.'
        }
        return res.redirect("/login");
    } 

    //database connect
    const db = req.app.db;

    db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result) => {
        if (err) 
        {
            console.log(err.sqlMessage);
            req.session.sessionFlash = {
                type: 'failed',
                message: 'Aww! something went wrong.'
            }
            return res.redirect("/login");
        }

        //send result in the request
        req.user = result[0];

        next();
    })

}

