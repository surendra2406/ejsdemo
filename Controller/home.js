
const { MongoClient } = require("mongodb")

//handle post requests
exports.home=((req, res) => {


    const useremail = req.body.email
    const userpassword = req.body.password
    //console.log(useremail, userpassword)
    MongoClient.connect("mongodb://localhost/127017", function (error, response) {
        if (error) throw error
        const dbcon = response.db("ejsdemo_db")
        const getdata = dbcon.collection("users").findOne({ email: useremail, password: userpassword }, function (findErr, findresult) {
            response.close();
            if (findErr) throw findErr
            //console.log(findresult);
            if (findresult == null) {
                res.render("login", { message: "Username and password are invalid" })

            }
            if (findresult) {

                const sessionData = req.session
                sessionData.user = findresult.name
                
               // res.render("login", {message:"Login successful"})
                res.render("home", { user: findresult.name  })
                
            }

        })
    })


    // res.render("home")
})



//handle get request 

exports.homes= ((req, res) => {
  
    var sessionData = req.session;
    var user = sessionData.user
    var type = sessionData.type
    if(user)
    {
        
        res.render("home")
    }
    else
    {
        res.render("login",{message:""})
    }
   
})

