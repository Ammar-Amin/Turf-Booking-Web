import jwt from "jsonwebtoken"
import { apiError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(apiError(401, "You are not Authenticated"))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(apiError(403, "Invalid Token!"))
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.params.id === req.user.id || req.user.isAdmin) {
            next()
        } else {
            next(apiError(403, "Unauthorized"))
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            console.log(req.user.isAdmin)
            next();
        } else {
            next(apiError(403, "Access denied. You are not an Admin"))
        }
    })
}