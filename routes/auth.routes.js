import express from 'express'
import { Signup, Login, verifyEmail, forgotPassword, Logout } from '../controllers/auth.controllers.js';

const router = express.Router()


router.post("/signup", Signup)

router.post("/login", Login)

router.post("/verify-email", verifyEmail)

router.post("/forgot-password", forgotPassword)

router.post("/logout", Logout)


export default router