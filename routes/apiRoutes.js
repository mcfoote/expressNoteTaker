//local variables for requirements
const express = require('express');
const router = express.Router();
const db = require('../db/dbScript.js');

//get route
router.get('/api/notes', async function(req, res) {

    const notes = await db.read();
    return res.json(notes);

});

//post route
router.post('/api/notes', async function(req, res) {

    const notesCurrent = await db.read();

    let noteNew = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };

    await db.add([...notesCurrent, noteNew]);

    return res.send(noteNew);

});

//delete route
router.delete('/api/notes/:id', async function(req, res) {

    const deleteTarget = req.params.id;
    const notesCurrent = await db.read();
    const notesNewData = notesCurrent.filter((note) => note.id !== deleteTarget);

    await db.delete(notesNewData);

    return res.send(notesNewData);

});

module.exports = router;