const mongoose = require("mongoose")

const GameSchema = mongoose.Schema({

    game_name :{
        type:String,
        required:true
    },
    open_time:{
        type:String,
        trim:true,
    },
    close_time:{
        type:String,
        trim:true
    },
    status:{
        type:Boolean,
        default:true
    },
    insert_date:{
        type: Date, 
        default: Date

    },
    
})

const GameModel = mongoose.model("game",GameSchema);



module.exports = GameModel