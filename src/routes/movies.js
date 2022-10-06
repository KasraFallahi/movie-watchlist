import { getMovieById, searchMovie } from '../controllers/movies.js';
import { Router } from 'express';

const router = Router();

// GET search movie by keyword
router.route('/search').get(searchMovie);

// GET movie by id
router.route('/:id').get(getMovieById);

export default router;