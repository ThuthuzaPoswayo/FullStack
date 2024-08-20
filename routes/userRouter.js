import express from 'express'
import { fetchUsers, fetchUser, insertUser, deleteUser, updateUser } from '../controller/userController.js'

const router = express.Router()

router.get('/', fetchUsers)
router.post('/register', insertUser)

router.get('/:id', fetchUser)
router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)

export default router