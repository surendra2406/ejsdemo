//handle get request and session destroy of 
exports.logout =((req, res)=>{
    console.log("session destroy")
    var sessionData =req.session
    sessionData.destroy();
    res.redirect("/login")
    
})