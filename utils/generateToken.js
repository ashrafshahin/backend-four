
const jwt = require('jsonwebtoken');

// this function works for? এটা একটা JWT token তৈরি করে...3 TA PARAMETER DAI,...
const generateToken = (user) => {
    // must return korte hobe... error-2
    return jwt.sign(
        { id: user._id, username: user.username },
            process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    )
};

module.exports = generateToken