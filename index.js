const express = require("express")

const app = express();

app.use(express.json())
app.use(require("./src/routes/home.routes"))


const port = 4000;
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})

