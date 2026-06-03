const express = require('express');
const Model = require('../models/productModel');

const router = express.Router();

router.post( '/add', (req,res) =>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch((err) =>{
        console.log(err);
        res.status(200).json(err);
    })
    
    // res.send('response from user add');

});

router.get( '/getall', (req,res) =>{
    Model.find()
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch((err) =>{
        console.log(err);
        res.status(200).json(err);
    })

});

router.put( '/update', (req,res) =>{
    res.send('response from user update');

});

router.delete( '/delete', (req,res) =>{
    res.send('response from user delete');

});


module.exports = router;