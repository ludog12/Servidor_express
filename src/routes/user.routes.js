const router = require('express').Router();
const {
    getUsers,
    postUser,
    putUser,
    deleteUser,

} = require('../controllers/user.controllers');

router.get('/user', getUsers);
router.get('/user', postUser);
router.put('/user', putUser);
router.delete('/user', deleteUser);

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
router.put("/user", (req, res)=>{
    res.send("<h1>Peticion Put para actualizar usuario</h1>")

})
router.delete("/user", (req, res)=>{
    res.send("<h1>Peticion delete para deletear usuario</h1>")

})


module.exports = router;