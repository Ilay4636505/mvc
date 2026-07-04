// -- imports. -- 
const User = require('../controller/users')
const express = require('express')
const router = express.Router();

// define paths.
router.get('/:name', User.getUser)
router.post('/', User.postUser)

// -- exports -- 
module.exports = router