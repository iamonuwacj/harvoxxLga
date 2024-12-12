import { User } from '../models/userModel.js'
import { GenerateTokenandSetCookie } from '../utils/generateTokenandSetCookie.js';
import bcrypt from 'bcrypt'


export const Signup = async () => {
    const { password, name, email } = req.body

    try {
        if(!email || !name || !password){
            throw new Error("All fields are required")
        }

        const UserAlreadyExist = await User.findOne({email})
        if(UserAlreadyExist) res.status(400).json({success: false, message: "User already exits"})

        if (email !== "iamonuwacj@gmail.com") res.status(403).json({success: false, message: "Unauthorised Access"})

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })

        await user.save()

        GenerateTokenandSetCookie(res, user._id)

        // sendVerificationEmail(email, verificationToken)


        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        res.status(400).json({success: true, message: error.message})
    }
}

export const Login = async () => {

}


export const Logout = async () => {

}


export const verifyEmail = async () => {

}


export const forgotPassword = async () => {

}
// export const Login = async () => {

// }