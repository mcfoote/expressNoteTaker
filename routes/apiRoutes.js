//local variables for requirements
const express = require('express');
const router = express.Router();
const db = require('../db/dbScript.json');
const uuid = require('uuid');

//get function
router.get('/api/notes', function(req, res) {

    const notes = await db.read();
    return res.json(notes);

});

//post function
router.post('/api/notes', function(req, res) {

    const notesCurrent = await db.read();

    let noteNew = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };

    await db.addNote

});