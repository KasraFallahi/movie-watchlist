import { getMovieById } from '../controllers/movies.js';
import { Router } from 'express';

const router = Router();

// GET movie by id
router.route('/:id').get(getMovieById);

export default router;