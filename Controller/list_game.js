const { MongoClient } = require("mongodb");
//handle post request

exports.list_game =((req, res)=>{
    const gamename =req.body.game
    const startgame =req.body.start
    const stopgame = req.body.stop
    
    
    // MongoClient.connect('mongodb://localhost:27017/', function (err, resp) {
    //     if (err) throw err;
    //     var dbcon = resp.db('ejsdemo_db');
    //     const insertdata = { name: gamename.toLowerCase(), start: startgame, stop: stopgame,  }
    //     dbcon.collection("games").insertOne(insertdata, function (err, result) {
    //         if (err) throw err
    //         console.log("1 record insert")
    //         resp.close()
    //         res.render('list_game', )
    //     })
    // });
    res.render("list_game")
})



//handle get request
exports.list_games =((req, res)=>{

    const sessionData = req.session
    const user = sessionData.user
    if(user)
    {
      
       MongoClient.connect("mongodb://localhost:27017/", function(error, response){
        if(error) throw error
        var dbconn =response.db("ejsdemo_db")
        var getdata =dbconn.collection("games").find({}).toArray(function(findErr, result){
            if(findErr) throw findErr
            // console.log(result)
            response.close();
            res.render("list_game",{data:result} )
        })
    })


  
    }
    else
    {
    res.redirect("/")
        
    }
      
})