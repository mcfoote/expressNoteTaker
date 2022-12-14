//local requirements
const path = require('path');
const fs = require('fs');

// function to create new notes
function addNote(content, notesArr) {

    const newNote = content;
    notesArr.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify({notesArr}, null, 2)
    );

    return newNote;

}

// function to delete targeted note
function delNote(id, notes) {

    let notesArrNew = notes.filter(el => {

        if(el.id == id) {
            return false
        }else {
            return true
        }

    })

    //correct index
    let index = 0;
    notesArrNew.forEach(note => {
        note.id = index;
        index++;
    });

    //write out
    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify({notesArrNew}, null, 2)
    )

    return notesArrNew;

}


module.exports = {

    addNote,
    delNote

};

