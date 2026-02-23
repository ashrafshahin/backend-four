// BusinessLogic. এখানে developer Shahin চাচ্ছে:“User register করলেই automatically login হয়ে যাক।” এটা modern app গুলোতে common(যেমন: অনেক ওয়েবসাইটে signup করলেই সরাসরি dashboard এ নিয়ে যায়) so hassPassword mandatory + Token should be created too, because you're already logged-In to Dashboard ...

const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken') // mistake 1

// Register
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ email }); // DB 'User' collection check korbe...
        if (existingUser) return res.status(400).json({ success: false, message: 'Email already exists...' }) // email already used..
        
        const salt = await bcrypt.genSalt(10); // error 3 not getsalt.
        const hassedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ username, email, password: hassedPassword });
        const token = generateToken(user)

        res.status(201).json({ success: true, token, data: user });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

// Login

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. email ase kina deklo...
        const user = await User.findOne({ email }); // DB 'User' collection check korbe
        if (!user) return res.status(404).json({ success: false, message: 'User not found...' });

        // 2. password match kore kina deklo...
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) return res.status(400).json({ success: false, message: 'Wrong Password...' });

        // token debe sob thik thakle...
        const token = generateToken(user)
        res.status(200).json({ success: true, token });
        
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { register, login };



