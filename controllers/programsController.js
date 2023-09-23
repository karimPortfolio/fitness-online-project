


exports.programs = (req, res) => {

    //get user id from session
    const userid = req.session.userid;
    const db = req.app.db;


    if(typeof userid !== "undefined")
    {
        //get the auth user data usind the id stocked in session
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result) => {

            if (err) console.log(err.sqlMessage);

            //get all programs from db
            db.query("SELECT * FROM programs", (err, result2) => {
                if (err) {
                    return res.render("pages/programs", {auth:false, title:"Programs", programs:null});
                }
                let name = result[0].name.split(" ");
                name = name[0][0] + name[1][0];
                const response = {
                    title:"Programs",
                    auth:true,
                    name:name,
                    user:result[0],
                    programs:result2
                }
                return res.render("pages/programs", response);
            })
        })
    }

    else
    {
        //get all programs from db
        db.query("SELECT * FROM programs", (err, result2) => {
            if (err) {
                return res.render("pages/programs", {auth:false, title:"Programs", programs:null});
            }
            const response = {
                title:"Programs",
                auth:false,
                programs:result2,
            }
            return res.render("pages/programs", response);
        })
    }

}


exports.programDetails = (req, res) => {

    //get program id from request params
    const programid = req.params.id;

    //check if id not a number
    if (isNaN(programid)) return res.redirect("/programs");

    //get user id from session
    const userid = req.session.userid;
    const db = req.app.db;

    if (typeof userid !== 'undefined')
    {
        //get the auth user data usind the id stocked in session
        db.query("SELECT id, name, email FROM users WHERE id = ?", userid, (err, result) => {

            if (err) console.log(err.sqlMessage);

            //get all programs from db
            const query = "SELECT programs.* , coaches.name, coaches.role, coaches.experience, coaches.image AS coach_img FROM programs JOIN coaches WHERE coaches.id = programs.coach_id AND programs.id = ?";
            db.query(query, programid, (err, result2) => {
                if (err) {
                    return res.redirect("/programs");
                }
                let name = result[0].name.split(" ");
                name = name[0][0] + name[1][0];
                const query2 = "SELECT COUNT(program_id) AS isJoined, joined_at FROM users_programs WHERE user_id = ? AND program_id = ?";
                const values = [userid, programid];
                db.query(query2, values, (err, result3) => {

                    if (err || result3[0].isJoined === 0)
                    {
                        const response = {
                            title:`Programs | ${result2[0].programme}`,
                            auth:true,
                            name:name,
                            user:result[0],
                            program:result2[0],
                            isJoined:false,
                            joinedDate:null
                        }
                        return res.render("pages/programDetails", response);
                    }
                    const date = new Date(result3[0].joined_at);
                    const formattedDate = date.toLocaleString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    });

                    const response = {
                        title:`Programs | ${result2[0].programme}`,
                        auth:true,
                        name:name,
                        user:result[0],
                        program:result2[0],
                        isJoined:true,
                        joinedDate:formattedDate
                    }
                    return res.render("pages/programDetails", response);

                })
            })
        })
    }

    else
    {
        //get all programs from db
        const query = "SELECT programs.* , coaches.name, coaches.role, coaches.experience, coaches.image AS coach_img FROM programs JOIN coaches WHERE coaches.id = programs.coach_id AND programs.id = ?";
        db.query(query, programid, (err, result) => {
            if (err) {
                return res.redirect("/programs");
            }
            const response = {
                title:`Programs | ${result[0].programme}`,
                auth:false,
                program:result[0],
                isJoined:null,
                joinedDate:null
            }
            return res.render("pages/programDetails", response);
        })
    }

}


exports.join = (req, res) => {

    const user = req.user;
    const programid = req.params.id;

    //get the db connect from request
    const db = req.app.db;

    

    const values = [user.id, programid];
    db.query("INSERT INTO users_programs(user_id, program_id) VALUES (?, ?)", values, (err, result) => {
        if (err)
        {
            req.session.sessionFlash = {
                type: 'failed',
                message: 'Aww! something went wrong.'
            }
            return res.redirect(`/programs/details/${programid}`);
        }
        db.query("SELECT programme FROM programs WHERE id = ?", programid, (err, result2) => {
            if (err)
            {
                console.log(err.sqlMessage);
            }
            req.session.sessionFlash = {
                type: 'success',
                message: `Congrats! you have joined ${result2[0].programme} program.`
            }
            res.redirect(`/programs/details/${programid}`);
        })
    })

}


exports.quitProgram = (req, res) => {

    const user = req.user;
    const programid = req.params.id;

    //get the db connect from request
    const db = req.app.db;

    const values = [user.id, programid];
    db.query("DELETE FROM users_programs WHERE user_id = ? AND program_id = ?", values, (err, result) => {
        if (err)
        {
            req.session.sessionFlash = {
                type: 'failed',
                message: 'Aww! something went wrong.'
            }
            return res.redirect(`/dashboard`);
        }
        db.query("SELECT programme FROM programs WHERE id = ?", programid, (err, result2) => {
            if (err)
            {
                console.log(err.sqlMessage);
            }
            req.session.sessionFlash = {
                type: 'success',
                message: `You have left ${result2[0].programme} program.`
            }
            res.redirect(`/dashboard`);
        })
    })

}

