import express from 'express'
import { fetchUsers, insertUser, fetchUser, updateUser, deleteUser } from '../controller/userController.js'

const router = express.Router()

router.
    route('/')
        .get(fetchUsers)
        .post(register)

router. 
    route('/:id')
        .get(fetchUser)
        .patch(updateUser)
        .delete(deleteUser)


export default router