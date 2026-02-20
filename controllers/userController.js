//This covers the standard CRUD pattern.Each function follows the same structure: async(req, res) → try/catch → respond with success + data or error message.


const getUsers = async (req, res) => {
    
    try {
        const users = []
        res.status(200).json({ success: true, data: users })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const getUsersById = async (req, res) => {
    try {
        const { id } = req.params // params means parametres
        const user = {} // fetch by id
        if (!user) return res.status(404).json({ success: false, message: 'user not found' })
        res.status(200).json({ success: true, data: user })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = { username, email, password } // save to DB
        res.status(201).json({ success: true, data: newUser })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const updated = req.body // update in DB.. buji nai
        res.status(200).json({ success: true, data: updated })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
};

const deleteUser = async (req, res)=>{
    try {

        const { id } = req.params; // delete from DB
        res.status(200).json({success:true, message:"User Deleted"})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}




module.exports = {getUsers, getUsersById, createUser, updateUser, deleteUser} 

