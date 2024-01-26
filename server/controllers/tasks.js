const mongoose = require('mongoose');
const Tasks = require('../models/tasks')

//Create data
const postTasks = (req, res) => {
    const { title, content, status, dueDate } = req.body;
    const user = req.userId;

    if (!title || !content) {
        return res.status(400).json({ message: "missing field" })
    } else if (title.length > 100) {
        return res.status(400).json({ message: "Title exceeds max length of 100" })
    }
    Tasks.create({ title, content, status, dueDate, user }).then((data) => res.status(201).json(data))
        .catch(err => res.status(500).json({ message: "Something went wrong" }))
}


//Get all data
const getAllTasks = (req, res) => {
    const user = req.userId;

    Tasks.find({ user }).sort({ _id: -1 }).then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: "Something went wrong" }))
}


//Get specific data
const getTask = async (req, res) => {
    const id = req.params.id

    try {
        const data = await Tasks.findById(id);
        if (!data) {
            return res.status(404).json({ message: "Tasks not found" });
        }
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}


//Update data
const updateTask = async (req, res) => {
    try {

        const { title, content, status, dueDate } = req.body;
        const user = req.userId;
        const id = req.params.id;

        if (!title || !content) {
            return res.status(400).json({ message: "missing field" })
        } else if (title.length > 100) {
            return res.status(400).json({ message: "Title exceeds max length of 100" })
        }

        const updatedData = await Tasks.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedData) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json(updatedData)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}



//delete data
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.userId;
        const deleteTask = await Tasks.findByIdAndDelete(id);
        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Something went wrong" });
    }
}

//delete all data
const deleteAllTask = async (req, res) => {
    try {
        const user = req.userId;

        const deleteTask = await Tasks.deleteMany({ user });
        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: " All Task deleted" })
    } catch (err) {
        // console.error(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = { postTasks, getAllTasks, getTask, updateTask, deleteTask, deleteAllTask }