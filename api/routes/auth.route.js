import { Router } from "express";
import { checkUser, login, logout, register } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verify.js";

const router = Router()

// register user
router.post('/register', register)

// login user
router.post('/login', login)

// login user
router.get('/logout', logout)

router.get('/', verifyToken, checkUser)

export default router