// -- imports. -- 
const User = require('../services/users')

// -- define functions --
const getUser = async (req,res) => {
    const name = req.params.name;
    
    const user = await User.getUser({name});
    if (!user) {
        return res.status(404).json({"message": "Not found"})
    }
    return res.status(200).json(user)
}

const postUser = async (req, res) => {
    const {name, password} = req.body; // !NOTE: body.

    const user = await User.postUser({name, password});
    return res.status(201).json(user) // !NOTE: 201 instead of 200 and we return the user.
}

// -- exports -- 
module.exports = {getUser, postUser}