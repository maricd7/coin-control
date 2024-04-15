// middleware for checking user token 

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');

    // Check if token does not exist
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware; 
