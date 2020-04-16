const express = require('express');
const router = express.Router();

const Donations =  require('../models/Donations');

//CREATE
router.post('/api/v1/Donations',(req, res)=>{
    if (!req.body.Donations || req.body.Donations.length === 0) {
        res.status(400).json({ mensaje: "Debes de escribir un monto" })
      }
    const {body} = req;
   return Donations.create(body)
    .then(=> res.status(201).json({ mensaje: "¡Gracias por tu donación!" }))
    .catch(err=> res.status(400).json(err));
});

//READ ONE
router.get('/api/v1/Donations/:id',(req, res)=> {
    const {id} = req.params;
    Donations.findById(id)
    .then(Donations => {
        if (Donations.length === 0) res.status(200).json({ mensaje: 'No hay donaciones' });
        res.status(200).json(tickets);
      })
    .catch(err=> res.status(400).json(err));
});

// READ ALL
router.get('/api/v1/Donations',(req, res)=>{
    Donations.find()
    .then(Donations => res.status(200).json(Donations))
    .catch(err=> res.status(400).json(err));
});

//MODIFY (PATCH)
router.patch('/api/v1/Donations/:id',(req, res)=>{
    const {id} = req.params;
    Donations.findByIdAndUpdate(id,req.body,{new: true})
    .then(Donations => res.status(200).json(Donations))
    .catch(err=> res.status(400).json(err));
});
// DELETE
router.delete('/api/v1/Donations/:id',(req, res)=>{
    const {id} = req.params;
    Donations.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err=> res.status(400).json(err));
});

module.exports = router;