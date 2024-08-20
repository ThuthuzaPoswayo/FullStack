import { getUsersDB, insertUserDB, getUserDB, updateUserDB, deleteUserDB } from '../model/userDB.js'
import {hash} from 'bcrypt'

const fetchUsers = async (req,res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req,res) => {
    res.json(await getUserDB(req.params.id))
}

const insertUser = async (req,res) => {
    let {firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile} = req.body
    console.log(req.body);

    hash()
     
    await insertUserDB(firstName, lastName, userAge, gender, userRole, emailAdd, userPass, userProfile
    )
    res.send('Data was inserted kaloku :)')
}

const updateUser = async (req,res) => {

}

const deleteUser = async (req,res) => {

}

export { fetchUsers, insertUser, fetchUser, updateUser, deleteUser }