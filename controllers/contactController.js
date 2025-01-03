const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc get all contacts
//@route GET /api/contacts
//@acces private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
    //res.status(200).json({message :"Get all contacts from server"});
})

//@desc get  contact
//@route GET /api/contacts/:id
//@acces private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    //if contact not found
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found")
    }
    res.status(200).json(contact);
    //res.status(200).json({message: `get contact ${req.params.id}`});
})

//@desc create  contact
//@route post /api/contacts/
//@acces private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body :", req.body);
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400);
        throw new ("All fields are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    })
    res.status(201).json(contact)
    //res.status(201).json({ message: `create contact` });
})

//@desc update  contact
//@route PUT /api/contacts/:id
//@acces private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("contact not Found")
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User dont have permission to update contact of other user")
    }
    //update contact
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, //get contact
        req.body,     //new by that updated
        { new: true }    //query option 
    )
    res.status(200).json(updatedContact)
    //res.status(200).json({message: `update contact ${req.params.id}` });
})

//@desc delete  contact
//@route Delete /api/contacts/:id
//@acces private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new error("Contact NOT Found")
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User dont have permission to update contact of other user")
    }
    try {
        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).json(contact)
    } catch (err) {
        console.log(err);

    }
    //res.status(200).json({message: `delete contact ${req.params.id}` });
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }
