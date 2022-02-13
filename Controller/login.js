
const { MongoClient } = require("mongodb");


// handle post request
exports.login = ((req, res) => {



    res.render('login',{message:""})
})



//handle get request
exports.logins = ((req, res) => {

    const sessionData = req.session
    const user = sessionData.user
    if(user)
    {
        res.render("home", {})
    }
    else{
        res.render("login",{message:""})
    }
    
    
})