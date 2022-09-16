const router = require("express").Router();

const {getHome, postHome,
     putHome,
     deleteHome}=require("../controllers/home.controller")



router.get("/", getHome)
router.get("/", postHome)
router.get("/", putHome)
router.get("/", deleteHome)

router.get("/", (req, res)=>{
res.send("<h1>Hola, Gente!</h1>")

})
router.get("/user", (req, res)=>{
res.send("<h1>Listado de Usuarios</h1>")

})
router.post("/user", (req, res)=>{
    console.log(req.body)
    res.send("<h1>Peticion post para cargar nuevo usuario</h1>")

})
router.put("/update", (req, res)=>{
    res.send("<h1>Peticion Put para actualizar usuario</h1>")

})
router.delete("/user", (req, res)=>{
    res.send("<h1>Peticion delete para deletear usuario</h1>")

})

module.exports= router;