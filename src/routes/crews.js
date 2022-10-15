import { addCrew } from '../controllers/crews.js';
import { Router } from 'express';

const router = Router();

// POST add crew
router.route('/').post(addCrew);

export default router;