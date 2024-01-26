const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');

const dbConnect = require('./mongoose/dbConnect');
const userRoutes = require('./routes/user.js')
const tasksRoutes = require('./routes/tasks.js')


dotEnv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "This is a Task Manager API" })
})

app.use('/user', userRoutes);
app.use('/tasks', tasksRoutes);


app.use('/', (err, req, res, next) => {
    res.status(500).json("Something Went Wrong")
})

dbConnect();
app.listen(PORT, () => {
    console.log("server is running on port:", PORT)
})


module.exports = app;