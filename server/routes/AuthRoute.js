import express from 'express';
import {SignUp} from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/signup', SignUp);

export default router;