import { Router } from "express";
import { createTurf, deleteTurf, getAllTurfs, getTurf, updateTurf } from "../controllers/turf.controller.js";
import { verifyAdmin } from "../utils/verify.js";

const router = Router()


// get all turfs 
router.get('/', getAllTurfs)

// get single Turf 
router.get('/:id', getTurf)

// create new turf 
router.post('/', verifyAdmin, createTurf)

// update Turf 
router.put('/:id', verifyAdmin, updateTurf)

// delete Turf 
router.delete('/:id', verifyAdmin, deleteTurf)


export default router