import { Router } from "express";
import { createTurf, deleteTurf, getAllTurfs, getTurf, updateTurf } from "../controllers/turf.controller.js";

const router = Router()


// get all turfs 
router.get('/', getAllTurfs)

// get single Turf 
router.get('/:id', getTurf)

// create new turf 
router.post('/', createTurf)

// update Turf 
router.put('/:id', updateTurf)

// delete Turf 
router.delete('/:id', deleteTurf)


export default router