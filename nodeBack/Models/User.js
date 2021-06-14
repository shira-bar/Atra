const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    age: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    telephone: {
        type: String,
        minlength: 9,
    }
})

module.exports = mongoose.model('User', userSchema)


