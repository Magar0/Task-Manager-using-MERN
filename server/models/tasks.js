const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    status: {
        type: Boolean,
        default: false,
    },
    priority: {
        type: "string"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema)

module.exports = Tasks;