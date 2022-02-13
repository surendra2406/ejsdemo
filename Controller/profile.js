
//for get request handle
exports.profiles = ((req, res) => {

    const sessionData = req.session
    const user = sessionData.user
    if (user) {
        res.render("profile", { message: "" })
    }
    else {
        res.redirect("/login")
    }
})




//for post request handle
exports.profile = ((req, res) => {
    const name = req.body.name
    const dateofjoin = req.body.joindate
    const dateofbirth = req.body.birthdate
    const uploadedfile = req.file
    console.log(uploadedfile)
    console.log(name, dateofjoin, dateofbirth)



    res.render("profile", { message: "" })

})





