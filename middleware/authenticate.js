exports.adminAuth = function(req,res,next){
    const sessionData = req.session
    const user = sessionData.user
    if (user) {
        return next();
    }else {
       return res.redirect("/login");
    }
}

// if (user) {
//     next();
// }else {
//    res.redirect("/login");
// }