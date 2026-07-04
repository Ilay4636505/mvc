// -- imports. --
const User = require('../models/users')

// -- define functions -- 
const getUser = async ({name}) => {
    const user = await User.findOne({name: name})
    return user
}
const postUser = async({name, password}) => {
    const user = new User({name: name, password: password});
    await user.save();
    //return.
    return {name, password}
}

// -- exports -- 
module.exports = {getUser, postUser}