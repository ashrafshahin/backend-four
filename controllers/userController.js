
const User = require('../models/userModel')

const getUsers = async (req, res) => {
    
    try {
        const users = await User.find()
        res.status(200).json({ success: true, data: users })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const getUsersById = async (req, res) => {
    try {
        // const { id } = req.params 
        const user = await User.findById(req.params.id) 
        if (!user) return res.status(404).json({ success: false, message: 'user not found' })
        res.status(200).json({ success: true, data: user })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password })  // save to DB
        res.status(201).json({ success: true, data: newUser })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const updateUser = async (req, res) => {
    try {
        // const { id } = req.params
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })  // update in DB.. buji nai
        if (!updated) return res.status(404).json({ success: false, message: 'User not found to update...' })
        res.status(200).json({ success: true, data: updated })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const deleteUser = async (req, res)=>{
    try {
        // const { id } = req.params; // delete from DB
        const deleted = await User.findByIdAndDelete(req.params.id)
        if(!deleted) return res.status(404).json({success:false, message: 'User not deleted...'})
        res.status(200).json({success:true, message:"User Deleted"})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}




module.exports = {getUsers, getUsersById, createUser, updateUser, deleteUser} 



// 1. This covers the standard CRUD pattern.Each function follows the same structure: async(req, res) → try/catch → respond with success + data or error message.

// 2. The key Mongoose methods to remember are find(), findById(), create(), findByIdAndUpdate(), and findByIdAndDelete().The { new: true } option in update returns the updated document instead of the old one.
