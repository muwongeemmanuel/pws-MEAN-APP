//importing modules
const express = require("express");
const router = express.Router();
var bodyparser = require("body-parser");
var cors = require("cors");

//adding middleware - cors
router.use(cors());
//adding middleware - body-parser
// parse application/json
router.use(bodyparser.json());
// parse application/x-www-form-urlencoded
router.use(bodyparser.urlencoded({ extended: false }))

module.exports = router;

const Contact = require("../models/contact");

//retrieving data
router.get("/", (req, res, next)=>{
    //logic to add data
    // res.send("Retrieving the contact list");
    Contact.find(function(err, contacts){
        if(err){
            console.log(err)
        }
        else{
            res.json(contacts);
        }
    })
});

//retrieving single data
router.get("/:id", (req, res, next)=>{
    //logic to add data
    // res.send("Retrieving the contact list");
    Contact.findById({_id: req.params.id}, function(err, contact){
        if(err){
            console.log(err)
        }
        else{
            res.json(contact);
        }
    })
});

//adding data
router.post("/", (req, res, next)=>{
    //logic to add data
    // console.log(req.body)
    // let newContact = new Contact(req.body);
    let newContact = new Contact({
        contact_string: req.body.contact_string,
        category: req.body.category,
        client: req.body.client
    });

    newContact.save((err, contact)=>{
        if(err){
            res.json({msg: "Failed to add contact"});
            // res.json(err);
        }else{
            res.json({msg: "Contact added successfully"});
        }
    })
});

//editing data
router.post("/:id", (req, res, next)=>{
    Contact.findById({_id: req.params.id}, function(err, contact){
        if(!contact){
            res.json({msg: "Could not load Document"});
            // console.log(err)
        }
        else{
            contact.contact_string = req.body.contact_string;
            contact.category = req.body.category;
            contact.client = req.body.client;
        }

        contact.save((err, contact)=>{
            if(err){
                // res.json({msg: "Failed to update contact"});
                res.json(err);
            }else{
                res.json({msg: "Contact updated successfully"});
            }
        })
    })
});

//deleting data
router.delete("/:id", (req, res, next)=>{
    //logic to delete data
    Contact.deleteOne({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});