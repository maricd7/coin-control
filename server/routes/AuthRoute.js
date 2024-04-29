import express from 'express';
import {SignUp, Login, Logout} from '../Controllers/AuthController.js';

const router = express.Router();
router.post('/logout',Logout)
router.post('/signup', SignUp);
router.post('/login', Login)



export default router;