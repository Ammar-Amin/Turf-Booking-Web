import { Booking } from "../models/booking.model.js"
import { apiError } from "../utils/error.js"

export const getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate({ path: 'user', select: ['name', 'email'] })
            .populate({ path: 'turf', select: ['name', 'location', 'pricePerHour', 'imageUrls'] })
        res.status(200).json(bookings)
    } catch (error) {
        next(error)
    }
}


export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate({ path: 'user', select: ['name', 'email'] })
            .populate({ path: 'turf', select: ['name', 'location', 'pricePerHour', 'imageUrls'] })
        if (!booking) return next(apiError(404, "Booking id not Found"))
        res.status(200).json(booking)
    } catch (error) {
        next(error)
    }
}


export const createBooking = async (req, res, next) => {
    const booking = await Booking.create(req.body)
    try {
        const savedBooking = await booking.save()
        res.status(200).json(savedBooking)
    } catch (error) {
        next(error)
    }
}


export const updateBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        if (!booking) return next(apiError(400, "Can't update the booking"))
        res.status(200).json(booking)
    } catch (error) {
        next(error)
    }
}


export const deleteBooking = async (req, res, next) => {
    try {
        const delBooking = await Booking.findByIdAndDelete(req.params.id)
        if (!delBooking) return next(apiError('404', 'Not Found : Invalid Booking Id!'))
        res.status(200).json("Booking Deleted Successfully")
    } catch (error) {
        next(error)
    }
}