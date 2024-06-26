// const User = require('../Models/user')
import User from '../Models/user.mjs'
import { createSecretToken } from '../util/SecretToken.mjs'
import bcrypt from 'bcryptjs';




//handle register
export const SignUp = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: 'User already exists' });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: 'User signed in successfully', success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

//handle login
export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
    res.cookie('username', user.username, { 
      withCredentials: true,
      httpOnly: false,
    });


     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}


//handle logout
export const Logout = async (req, res, next) => {
  try {
    // Clear cookies
    res.clearCookie('token', { withCredentials: true });
    res.clearCookie('username', { withCredentials: true });
    res.status(200).json({ message: 'User logged out successfully', success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};