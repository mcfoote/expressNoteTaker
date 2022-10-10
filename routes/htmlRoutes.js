const path = require('path');
const express = require('express');
const router = express.Router();

//get function from 
router.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

});

router.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));

});

router.get('/notes', (req, res) => {

    res.sendFile(path.join(__dirname, 'notes.html'));

});
  

module.exports = router;