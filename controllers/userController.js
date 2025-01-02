const asyncHandler = require("express-async-handler")

//@desc registration
//@route POST /api/users/register
//@acces public
const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" })
})

//@desc login
//@route POST /api/users/login
//@acces public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login user"})
})

//@desc current
//@route POST /api/users/current
//@acces private
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"current user"})
})


module.exports = { registerUser ,loginUser,currentUser}