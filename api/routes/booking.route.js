import { Router } from "express";
import { verifyUser } from "../utils/verify.js";
import { createBooking, deleteBooking, getAllBookings, getBooking, updateBooking } from "../controllers/booking.controller.js";

const router = Router()

// get single booking 
router.get('/:id', verifyUser, getBooking)

// get all bookings 
router.get('/', verifyUser, getAllBookings)

// create new booking 
router.post('/', verifyUser, createBooking)

// update booking 
router.put('/:id', verifyUser, updateBooking)

// delete booking 
router.delete('/:id', verifyUser, deleteBooking)

export default router