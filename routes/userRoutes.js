const express = require('express')
const { userController,
    getAllUserInControllers,
    getByIdController, updateUserController } = require('../controllers/userController')

const router = express.Router()

router.post('/user', userController)
router.get('/get-user', getAllUserInControllers)
router.get('/get-data:id', getByIdController)
router.put('/update-user:id', updateUserController)

module.exports = router;