import { Router } from 'express';

import admin from './admin.js';
import auth from './auth.js';
import movies from './movies.js';
import user from './user.js';

const router = Router();

router.use('/admin', admin);
router.use('/auth', auth);
router.use('/film', movies);
router.use('/user', user);

export default router;
