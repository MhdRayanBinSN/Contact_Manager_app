const asyncHandler = require("express-async-handler")

//@desc get all contacts
//@route GET /api/contacts
//@acces public
const getContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({message :"Get all contacts from server"});
})

//@desc get  contact
//@route GET /api/contacts/:id
//@acces public
const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `get contact ${req.params.id}`});
})

//@desc create  contact
//@route post /api/contacts/
//@acces public
const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body :",req.body);
    const {name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new ("All fields are mandatory")
    }
    res.status(201).json({message: `create contact`});
})

//@desc update  contact
//@route PUT /api/contacts/:id
//@acces public
const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `update contact ${req.params.id}` });
})

//@desc delete  contact
//@route Delete /api/contacts/:id
//@acces public
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `delete contact ${req.params.id}` });
})


module.exports ={ getContacts,getContact,createContact,updateContact,deleteContact}
