const mongoose = require('mongoose');


const dbUrl = "mongodb://localhost:27017/User"
const ConnectDB = mongoose.connect(dbUrl, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})

module.exports = ConnectDB;
