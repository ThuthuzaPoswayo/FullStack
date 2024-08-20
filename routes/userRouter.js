import express from 'express'
import { fetchUsers, fetchUser, insertUser, deleteUser, updateUser } from '../controller/userController.js'

const router = express.Router()

router.
    route('/')
        .get(fetchUsers)
        .post(insertUser)

router.
    route('/:id')
    .get(fetchUser)
    .delete(deleteUser)
    .patch(updateUser)

export default router