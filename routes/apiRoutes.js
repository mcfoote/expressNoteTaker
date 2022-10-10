//local variables for requirements
const express = require('express');
const router = express.Router();
let {addNote, delNote} = require('../db/dbScript');
const {notesArr} = require('../db/db')

//get route
router.get('/db', (req, res) => {

    let result = notesArr;
    res.json(result);

});

//post route 
router.post('/db', (req, res) => {

    if(notesArr) {
        req.body.id = notesArr.length.toString();
    }else {req.body.id = 0}
    res.json(addNote(req.body, notesArr));

});

//delete route
router.delete('/db/:id', async(req, res) => {

    const {id} = req.params;
    notesArr = await delNote(id, notesArr);
    res.json(notesArr);

});

module.exports = router;