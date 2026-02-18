const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'pls enter email id'],
        unique: [true, 'dulicate email id']
    },
    password: {
        type: String,
        required: [true, "Pls enter password"],
        minlen: [6, "min length of 6 char"]
    }
})

module.exports = mongoose.model('AuthUser', authSchema)