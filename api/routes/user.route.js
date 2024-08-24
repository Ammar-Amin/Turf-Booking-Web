import { Router } from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

const router = Router()

// for understanding middlewares 
router.get('/checkauth', verifyToken, (req, res, next) => {
    res.send("You are currently logged in")
})
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("You are a User, You can book turfs")
})
router.get('/checkadmin', verifyAdmin, (req, res, next) => {
    res.send("You are Admin, do whatever you want")
})

router.get('/', verifyAdmin, getAllUsers)

router.get('/:id', verifyUser, getUser)

router.put('/:id', verifyUser, updateUser)

router.delete('/:id', verifyUser, deleteUser)

export default router