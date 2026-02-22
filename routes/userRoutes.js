const express = require('express');
const { getUsers, getUsersById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router()
const hashPassword = require('../middlewares/hashPassword')


// GET all users 1 - c'R'ud
router.get('/', getUsers);

// GET single user 2 - c'R'ud
router.get('/:id', getUsersById);

// POST create user 3 - 'C'rud
router.post('/', hashPassword, createUser); // ✅ hash before create

// PUT update user 4
router.put('/:id', hashPassword, updateUser); // ✅ hash before update

// DELETE user 5
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