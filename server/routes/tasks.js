const express = require('express')
const tasks = require('../controllers/tasks')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router();

const { postTasks, getAllTasks, getTask, updateTask, deleteTask, deleteAllTask } = tasks;

router.post('/', authMiddleware, postTasks)
router.get("/", authMiddleware, getAllTasks)
router.get("/:id", authMiddleware, getTask)
router.put("/:id", authMiddleware, updateTask)
router.delete("/deleteAll", authMiddleware, deleteAllTask)
router.delete("/:id", authMiddleware, deleteTask)

module.exports = router;
