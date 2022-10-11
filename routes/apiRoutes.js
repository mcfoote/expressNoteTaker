//local variables for requirements
const express = require('express');
const router = express.Router();
let {notesArr} = require('../db/db')
const {addNote, delNote} = require('../db/dbScript');

//get route
router.get('/notes', (req, res) => {

    let result = notesArr;
    res.json(result);

});

//post route 
router.post('/notes', (req, res) => {

    if(notesArr) {
        req.body.id = notesArr.length.toString();
    }else {req.body.id = 0}
    res.json(addNote(req.body, notesArr));

});

//delete route
router.delete('/notes/:id', async(req, res) => {

    const {id} = req.params;
    notesArr = await delNote(id, notesArr);
    res.json(notesArr);

});

module.exports = router;