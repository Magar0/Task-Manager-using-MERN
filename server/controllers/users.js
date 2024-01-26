const Users = require('../models/users');

//delete profile
const deleteUser = async (req, res) => {
    try {
        const deletedData = await Users.findByIdAndDelete(req.userId);
        res.status(200).json({ message: "Deleted Successfully" })
    } catch (err) {
        res.status(500).json({ error: "Something Went Wrong" })
    }
}

module.exports = { deleteUser }
