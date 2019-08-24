const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    contact_string:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    client:{
        type: String,
        required: true
    },
})

const Contact = module.exports = mongoose.model("Contact", ContactSchema)