import { getMovieById, searchMovie, addMovie } from '../controllers/movies.js';
import { Router } from 'express';

const router = Router();

// POST add movie
router.route('/').post(addMovie);

// GET search movie by keyword
router.route('/search').get(searchMovie);

// GET movie by id
router.route('/:id').get(getMovieById);

export default router;