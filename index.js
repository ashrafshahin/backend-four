const express = require('express')
const app = express()


app.get('/reg', (req, res) => {
    res.send()
})

app.listen(5000, () => {
    console.log('server running');
    
})