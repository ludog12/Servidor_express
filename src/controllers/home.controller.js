const contrHome= {}

contrHome.getHome = ((req, res)=>{
    res.send({
        message:"Peticion get"
    })
})
contrHome.postHome = ((req, res)=>{
    res.send({
        message:"Peticion post"
    })
})
contrHome.putHome = ((req, res)=>{
    res.send({
        message:"Peticion Put"
    })
})
contrHome.deleteHome = ((req, res)=>{
    res.send({
        message:"Peticion delete"
    })
})

module.exports = contrHome;