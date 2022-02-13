exports.adminAuth = function(req,res,next){
    if (req.session.adminData) {
        return next();
    }else {
       return res.redirect(admin);
    }
}




exports.adminNoAuth = function(req,res,next){
    if (req.session.adminData == undefined) {
        return next();
    }else {
       return res.redirect(admin+'/dashboard');
    }
}