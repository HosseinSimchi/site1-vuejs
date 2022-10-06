//? Import From Node Module
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser');

//* Import static files
const ConnectDB = require('./database')
const router = require('./routes/routes')

// App Setups
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())


app.get('/', (req, res) => {
    res.send('Connected to the BackEnd')
})


const PORT = 3000;
//? Connect to Mongo DB database
ConnectDB()
app.use('/user', router)


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))











