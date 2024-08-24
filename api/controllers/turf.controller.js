import { Turf } from "../models/turf.model.js"

export const getAllTurfs = async (req, res, next) => {
    try {
        const turfs = await Turf.find()
        res.status(200).json(turfs)
    } catch (error) {
        next(error)
    }
}


export const getTurf = async (req, res, next) => {
    try {
        const turf = await Turf.findById(req.params.id)
        res.status(200).json(turf)
    } catch (error) {
        next(error)
    }
}


export const createTurf = async (req, res, next) => {
    const turf = new Turf(req.body)
    try {
        const savedTurf = await turf.save()
        res.status(200).json(savedTurf)
    } catch (error) {
        next(error)
    }
}


export const updateTurf = async (req, res, next) => {
    try {
        const turf = await Turf.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(turf)
    } catch (error) {
        next(error)
    }
}


export const deleteTurf = async (req, res, next) => {
    try {
        const delTurf = await Turf.findByIdAndDelete(req.params.id)
        res.status(200).json(delTurf)
    } catch (error) {
        next(error)
    }
}