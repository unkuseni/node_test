import express from "express";
import checkAdmin from "../app/controllers/loginController.js";
const router = express.Router();

const __dirname = process.cwd();

router.use(express.static(__dirname + "/app/views"));
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/app/views/login.html");
});

router.get("/login", (req, res) => {
    res.send("Login Page");
})


router.get("/home", (req, res) => {
    res.sendFile(__dirname + "/app/views/home.html");
})

router.post("/", (req, res) => {
    let {
        user,
        pass
    } = req.body || {};

    if (checkAdmin(user, pass)) {
        console.log("Login Success");
        res.redirect("/home");
    } else {
        console.log("Login Failed");
        res.send("Login Failed");
    }

})




export default router;