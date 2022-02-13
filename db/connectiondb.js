const mongoose = require("mongoose")

const ConnectDB =async(DATABASE_URL) =>{
    try {
        const DB_OPTION ={
             dbName: "ejsdemo_db"
        };
         await mongoose.connect(DATABASE_URL, DB_OPTION)
         console.log("#########  database connection successful  #########")
        
    } catch (error) {
        console.log(error)
        
    }
}

module.exports= ConnectDB