import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = Router()

// register user
router.post('/register', register)

// login user
router.post('/login', login)

// login user
router.get('/logout', logout)


export default router