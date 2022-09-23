const router = require('express').Router();

const {
    getTask,
    postTask,
    putTask,
    deleteTask,

} = require('../controllers/task.controller');

router.get('/task', getTask);
router.post('/task', postTask);
router.put('/task', putTask);
router.delete('/task', deleteTask);

router.get("/task", (req, res)=>{
res.send("<h1>Listado de Tareas</h1>")

})
router.post("/task", (req, res)=>{
    console.log(req.body)
    res.send("<h1>Peticion post para cargar nueva tarea</h1>")

})
router.put("/task", (req, res)=>{
    res.send("<h1>Peticion Put para actualizar tarea</h1>")

})
router.delete("/task", (req, res)=>{
    res.send("<h1>Peticion delete para deletear tarea</h1>")

})



module.exports = router;