const User = require("../Models/User");

//יצירת משתמש חדש
const createUser = async (req, res) => {
    console.log('create user');
    try {
        let newUser = new User(req.body);
        console.log('new', newUser);
        await newUser.save();
        console.log('new user save', newUser);
        res.status(200).json({ newUser });
        }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//שליפת כל המשתמשים  הקימיים במערכת
const getAllUsers = async (req, res) => {
    try {
        let user=await User.find(). select({'userName':1,'email':1})
        res.status(200).json({ users: user }) 
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers
}