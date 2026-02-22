const express = require('express')

// database connection WITHOUT mongoose...
const dotenv = require('dotenv')
const database = require('./config/database')
dotenv.config()
database()

const app = express()
app.use(express.json()); // to read req.body 

const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

// user.save()
// res.send()
app.listen(3000, () => {
    console.log('server running');
    
})