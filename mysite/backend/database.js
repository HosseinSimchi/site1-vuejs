const mongoose = require('mongoose')
const express = require('express')

//* Connect DB
const ConnectDB = require('./server/server');
ConnectDB.then(() =>{
    console.log('Database connected..')
});


const app = express()












