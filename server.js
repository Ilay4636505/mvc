// -- imports. --
const express = require('express')
const User = require('./routes/users')
const mongoose = require('mongoose');

// -- define mongoose --
mongoose.connect(); // assume there is no connect string in this dir.

// -- define app --
const app = express()

// -- define routes --
app.use(express.json())
app.use('/users', User)

// -- listen --
app.listen(3000, '127.0.0.1')