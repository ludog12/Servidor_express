const router = require("express").Router();

const {getHome, postHome,
     putHome,
     deleteHome}=require("../controllers/home.controller")



router.get("/", getHome)
router.get("/", postHome)
router.get("/", putHome)
router.get("/", deleteHome)



module.exports= router;