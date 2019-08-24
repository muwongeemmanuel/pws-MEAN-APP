const express = require("express");
const router = express.Router();

module.exports = router;

const Contact = require("../models/contacts");

//retrieving data
router.get("/contacts", (req, res, next)=>{
    //logic to add data
    // res.send("Retrieving the contact list");
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//adding data
router.post("/contact", (req, res, next)=>{
    //logic to add data
    let newContact = new Contact({
        contact_string: req.body.contact_string,
        category: req.body.category,
        client: req.body.client
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: "Failed to add contact"});
        }else{
            res.json({msg: "Contact added successfully"});
        }
    })
});

//deleting data
router.delete("/contact/:id", (req, res, next)=>{
    //logic to delete data
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});