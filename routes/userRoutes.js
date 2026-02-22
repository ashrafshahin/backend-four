const express = require('express');
const { getUsers, getUsersById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router()

// CRUD used to make router...
router.get('/', getUsers);
router.get('/:id', getUsersById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


// controller er modhe check and message kora ase tai aita r lagtese naa...
// GET all users 1 - c'R'ud
// router.get('/', (req, res) => {
//     res.json({message: 'Get all users'})
// });

// GET single user 2 - c'R'ud
// router.get('/:id', (req, res) => {
//     res.json({ message: `Get user with id ${req.params.id}` })
// })

// POST create user 3 - 'C'rud
// router.post('/', (req, res) => {
//     res.json({ message: 'User Created...' })
// });

// PUT update user 4
// router.put('/:id', (req, res) => {
//     req.json({ message: `User ${req.params.id} updated...` })
// });

// DELETE user 5
// router.delete('/:id', (req, res) => {
//     res.json({ message: `User ${req.params.id} Deleted...` })
// });


module.exports = router;