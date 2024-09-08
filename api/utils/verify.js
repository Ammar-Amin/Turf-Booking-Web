import jwt from "jsonwebtoken"
import { apiError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access__token;

    if (!token) return next(apiError(401, "You are not Authenticated"))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(apiError(403, "Invalid Token!"))
        // console.log("verifyToken User : ", user)
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.params.id === req.user.id || req.user.isAdmin) {
            next()
        } else {
            next(apiError(403, "Unauthorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            next(apiError(403, "Access denied. You are not an Admin"))
        }
    })
}