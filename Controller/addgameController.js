const GameModel = require("../models/game")

class AddGameController {

    static GetAllDoc = (req, res) => {
        res.render("add_game", { message: "" })
    }

    static CreateDoc = async (req, res) => {
        // console.log(req.body)
        try {
            const game_name = req.body.game
            const open_time = req.body.opentime
            const close_time = req.body.closetime
            const doc = new GameModel({
                game_name: game_name,
                open_time: open_time,
                close_time: close_time,
            })
            await doc.save()
            res.render("add_game", { message: "Game Added Successful" })

        } catch (error) {
            console.log(error)
        }
    }

    static EditDoc = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await GameModel.findById(req.params.id)
            // console.log(result)
            res.render("edit_game", { message: "", data: result })
        } catch (error) {
            console.log(error)
        }
    }


    static UpdateDocById = async (req, res) => {
        try {
            // console.log(req.params.id)
            // console.log(req.body)
            const game_name = req.body.game;
            const open_time = req.body.opentime;
            const close_time = req.body.closetime;
            const result = await GameModel.findByIdAndUpdate(req.params.id, { game_name, open_time, close_time })
            res.redirect("/list-game")
        } catch (error) {
            console.log(error)
        }
    }

    static DeleteDoc = async (req, res) => {
        try {
            console.log(req.params.id)
            res.redirect("/list-game")
        } catch (error) {
        }
    }
}

module.exports = AddGameController

