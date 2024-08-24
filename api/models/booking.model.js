import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    turf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turf',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
}, { timestamps: true });

export const Booking = mongoose.model('Booking', bookingSchema);

