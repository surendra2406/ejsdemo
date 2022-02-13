const LoginModel = require("../models/adminUser")

class LoginController{
    // render login page
    static getLoginPage = async(req, res)=>{
        try {
            res.render("login", {message:""})
            console.log("object")
        } catch (error) {
            console.log(error)
        }
    }
    //check username and password and render home page if credential match
    static checkUserIsValid = async(req, res)=>{
        try {
           // console.log(req.body)
            const record =await LoginModel.findOne({email:req.body.email, password:req.body.password})
            console.log(record)
           if(record!=null)
           {
            if(record.email == req.body.email && record.password == req.body.password)
            {   
                const sessionData = req.session
                sessionData.user =req.body.email
                console.log("sessions set"+sessionData.user )
                res.redirect("/")
               
                
            }
           }
           if(record== null){
            console.log("invalid ")
            res.render("login", {message:"Invalid Username and Password"})
           }
        } catch (error) {
            console.log(error)
        }
    }

    
}

module.exports = LoginController