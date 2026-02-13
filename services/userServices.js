const User = require('../models/User')


const userCreate = async (name, mobileNum, emailId) => {
    const data = await User.create({ name, mobileNum, emailId })
    return data;
}

module.exports = { userCreate }