const express = require("express")

const router = express.Router()
const ListGameController = require("../Controller/listgameController")
const AddGameController =require("../Controller/addgameController")
const LoginController = require("../Controller/loginController")
const HomePageController = require("../Controller/homePageController")
const Auth = require("../middleware/authenticate")


//route for Home page
router.get("/",Auth.adminAuth,HomePageController.GetHomePage)
//route for login

router.get("/login", LoginController.getLoginPage)
router.post("/login", LoginController.checkUserIsValid)

//route for add game
router.get("/add-game",Auth.adminAuth, AddGameController.GetAllDoc)
router.post("/add-game", Auth.adminAuth,AddGameController.CreateDoc)
router.get("/add-game/edit/:id",Auth.adminAuth, AddGameController.EditDoc)
router.post("/add-game/update/:id",Auth.adminAuth, AddGameController.UpdateDocById)
router.post("/add-game/delete/:id",Auth.adminAuth, AddGameController.DeleteDoc)


// // route for list game
router.get("/list-game",Auth.adminAuth, ListGameController.GetAllDoc)
router.post("/list-game",Auth.adminAuth,ListGameController.CreateDoc )


//route for logout and session destroy
router.get("/logout", (req, res)=>{
    console.log("session destroy")
    var sessionData =req.session
    sessionData.destroy();
    res.redirect("/login")
    
})


module.exports =router
