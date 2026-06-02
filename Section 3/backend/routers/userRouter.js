const express = require('express');

const router = express.Router();

router.post( '/add', (req,res) =>{
    res.send('response from user add');

});

router.get( '/getall', (req,res) =>{
    res.send('response from user getAll');

});

router.put( '/update', (req,res) =>{
    res.send('response from user update');

});

router.delete( '/delete', (req,res) =>{
    res.send('response from user delete');

});


module.exports = router;