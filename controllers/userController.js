const { userCreate, getAllUser,
    getByIdUser, userByIdUpdate, userByIdDelete
} = require('../services/userServices')

const userController = async (req, res) => {
    try {
        const { name, mobileNum, emailId } = req.body;
        if (!name || !mobileNum || !emailId) {
            return "All field are required"
        }
        const userData = await userCreate(name, mobileNum, emailId);
        res.status(201).json({ data: userData, msg: 'data create' })
    } catch (err) {
        res.status(500).json({ error: err, msg: 'Internal' })
    }
}

const getAllUserInControllers = async () => {
    try {
        const userData = await getAllUser();
        res.status(200).json({ data: userData, success: true })
    } catch (err) {
        res.status(500).json({ error: err, msg: "Interal server error" })
    }
}

const getByIdController = async (req, res) => {
    try {
        const { id } = req.params
        const userData = await getByIdUser(id)
        res.status(200).json({ data: userData, msg: 'success' })
    } catch (err) {
        res.status(500).json({ error: err, msg: "internal server error" })
    }
}

const updateUserController = async (req, res) => {
    try {
        if (!req.params.id || !req.body) {
            return "id and data are required"
        }
        const userData = await userByIdUpdate(req.params.id, req.body)
        res.status(200).json({ data: userData, msg: "data update" })

    } catch (err) {
        res.status(500).json({ error: err, msg: 'data is not update' })
    }
}

const userDeteteController = async (req, res) => {
    try {
        const userdata = await userByIdDelete(req.params.id)

        res.status(200).json({ data: userdata, msg: 'uaer deleted' })
    } catch (err) {
        res.status(500).json({ error: err, msg: "user not deleted" })
    }
}

module.exports =
{
    userController, getAllUserInControllers,
    getByIdController, updateUserController
}