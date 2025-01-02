const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
//@desc registration
//@route POST /api/users/register
//@acces public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //if any user data field is empty
    if (!username || !email || !password) {
        res.status(400);
        throw new Error({message:"All fields are mandatory"})
    }
    //check the user is found or not
    const userAvailable = await User.findOne({email}) // check email found
    if(userAvailable){
        res.status(400)
        throw new Error("User Already Existed")
    }
    //password hashing
    const hashedPassword = await bcrypt.hash(password,10)  //(raw pass,salt round{no of chars})
    console.log("Hashed pass : ",hashedPassword);

    //user registration
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    })
    console.log(`user created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("user data is not valid")
    }
    res.json({ message: "Register the user" })
})

//@desc login
//@route POST /api/users/login
//@acces public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Login user" })
})

//@desc current
//@route POST /api/users/current
//@acces private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "current user" })
})


module.exports = { registerUser, loginUser, currentUser }