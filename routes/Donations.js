const express = require('express');
const router = express.Router();

const Donations =  require('../models/Donations');

//CREATE
router.post('/api/v1/Donations',(req, res)=>{
    const {body} = req;
   return Donations.create(body)
    .then(createdDonation=> res.status(201).json(createdDonation))
    .catch(err=> res.status(400).json(err))
});

//READ ONE
router.get('/api/v1/Donations/:id',(req, res)=>{
    const {id} = req.params;
    Donations.findById(id)
    .then(article => res.json(Donation))
    .catch(err=> res.status(400).json(err))
});

// READ ALL
router.get('/api/v1/Donations',(req, res)=>{
    Articles.find()
    .then(article => res.json(Donation))
    .catch(err=> res.status(400).json(err))
});

//MODIFY (PATCH)
router.patch('/api/v1/Donations/:id',(req, res)=>{
    const {id} = req.params;
    Donation.findByIdAndUpdate(id,req.body,{new: true})
    .then(article => res.json(Donation))
    .catch(err=> res.status(400).json(err))
});

// DELETE
router.delete('/api/v1/Donations/:id',(req, res)=>{
    const {id} = req.params;
    Donation.findByIdAndDelete(id)
    .then(Donation => res.status(204).json())
    .catch(err=> res.status(400).json(err))
});

module.exports = router;