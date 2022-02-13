const GameModel = require("../models/game")

class ListGameController {

    static CreateDoc =(req, res)=>{
        res.render("list_game",{data:""})
    }

    
    static GetAllDoc = async(req, res)=>{
        try {
            const result = await GameModel.find()
            // console.log(result)
            res.render("list_game", {data:result})
        } catch (error) {
            console.log(error)
        }

    }


    
}

module.exports =ListGameController

