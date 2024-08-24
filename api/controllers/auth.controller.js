import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
import { apiError } from "../utils/error.js";
export const register = async (req, res, next) => {
    const { name, email, password } = req.body
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({
            name,
            email,
            password: hash,
        })
        await newUser.save()
        res.status(200).json('User created successfully')
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    const { email } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) return next(apiError(404, "User not found"))

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) return next(apiError(401, "Wrong Credentials"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

        const { password, isAdmin, ...rest } = user._doc

        res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(rest)
    } catch (error) {
        next(error)
    }
}

export const logout = async (req, res, next) => {
    try {
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out')
    } catch (err) {
        next(err);
    }
};

