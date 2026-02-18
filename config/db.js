const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connect")
    } catch (err) {
        console.log("database is not connect", err)
    }
}

module.exports = connectDB