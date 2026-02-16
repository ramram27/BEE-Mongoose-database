const User = require('../models/User')


const userCreate = async (name, mobileNum, emailId) => {
    const data = await User.create({ name, mobileNum, emailId })
    return data;
}

const getAllUser = async () => {
    const data = await User.find();
    return data;
}

const getByIdUser = async (id) => {
    const data = await User.findById(id)
    return data;
}

const userByIdUpdate = async () => {
    const data = await User.findByIdAndUpdate(id, data, { new: true })
    return data;
}

const userByIdDelete = async (id) => {
    const data = await User.findByIdAndDelete(id)
    return data;
}

module.exports = {
    userCreate,
    getAllUser, getByIdUser,
    userByIdUpdate, userByIdDelete
}