import { Router } from 'express';

import admin from './admin.js';
import auth from './auth.js';
import movies from './movies.js';
import user from './user.js';
import crews from './crews.js';

const router = Router();

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/film', movies);
router.use('/user', user);
router.use('/crew', crews);

export default router;
