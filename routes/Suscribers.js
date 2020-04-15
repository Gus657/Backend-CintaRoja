/*
CRUD

crear todo el crud para que los susbcriptores se registren
y si fuera el caso que hay que resetear la contrasena

Hi T.T

-NickName (subscribers version of the name)
-Pin
-Email

*/

const express = require('express');
const router = express.Router();

const Subscribers =  require('../models/Subscribers');


// creando a la gente
router.post('/api/v1/Subscribers',(req, res)=>{
    if (!req.body.Subscribers || req.body.Subscribers.length === 0) {
        res.status(401).json({ mensaje: "cual es tu nickname o correo a utilizar?" })
      }
    const {body} = req;
   return Subscribers.create(body)
    .then(createdSubscribers=> res.status(201).json(createdSubscribers))
    .catch(err=> res.status(401).json(err));
});


//reflejando a una sola persona
router.get('/api/v1/Subscribers/:id',(req, res)=> {
    const {id} = req.params;
    Subscribers.findById(id)
    .then(Subscriber => {
        if (Subscribers.length === 0) res.status(201).json({ mensaje: 'queres empezar a ayudar?' });
        res.status(201).json(Subscriber.nickname);
      })
    .catch(err=> res.status(401).json(err));
});


// reflejando el nombre de todos los usuarios
router.get('/api/v1/Subscribers',(req, res)=>{
    Subscribers.find()
    .then(Subscribers => res.status(201).json(Subscribers))
    .catch(err=> res.status(401).json(err));
});


//modificar la informacion . sera que aqui es donde busco lo de mandar un pin?
router.patch('/api/v1/Subscribers/:id',(req, res)=>{
    const {id} = req.params;
    Subscribers.findByIdAndUpdate(id,req.body,{new: true})
    .then(Subscribers => res.status(201).json(Subscribers))
    .catch(err=> res.status(401).json(err));
});

// contraseña nueva
// ext input - campo de base de datos de contraseña

// desaparecer los registros
router.delete('/api/v1/Subscribers/:id',(req, res)=>{
    const {id} = req.params;
    Subscribers.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err=> res.status(400).json(err));
});

module.exports = router;
