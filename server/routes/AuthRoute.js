import express from 'express';
import {SignUp, Login} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/signup', SignUp);
router.post('/login', Login)

export default router;