const User = require("../models/task");

const ctrTask = {};

ctrlTask.gettask = async (req, res) => {
    const users = await User.find();

    return res.json(users)
};

ctrlUser.postUser = async (req, res) => {
    const { title, type, date } = req.body;

    const newTask= new Task({
        title,
        type,
        date
    });

    const task = await newTask.save();
    
    return res.json({
        msg: 'Tarea creado correctamente',
        task
    });
};

ctrlUser.putTask = async (req, res) => {
    return res.json({
        msg: ''
    })
};

ctrlUser.deleteTask = async (req, res) => {
    return res.json({
        msg: ''
    })
};

module.exports = ctrlTask;