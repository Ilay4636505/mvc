// -- Imports. - -
const mongoose = require('mongoose');

// -- define schema -- 
const user = new mongoose.Schema({
    name: {
        type: String
    },
    password : {
        type: String
    }
})

// -- exports -- 
module.exports = mongoose.model('User', user)