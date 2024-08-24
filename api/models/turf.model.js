import mongoose from "mongoose";

const turfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true
    },
    location: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
    },
    pricePerHour: {
        type: Number,
        required: true
    },
    openingTime: {
        type: String,
        required: true
    },
    closingTime: {
        type: String,
        required: true
    },
    imageUrls: {
        type: [String]
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

export const Turf = mongoose.model('Turf', turfSchema);
