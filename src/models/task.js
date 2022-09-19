const { model, Schema } = require('mongoose');

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: date,
        required: true,

}
});

module.exports = model('task', taskSchema);