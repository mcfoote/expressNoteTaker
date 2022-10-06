//local requirements
const util = require('util');
const fs = require('fs');
//local variables
const writeFile = util.promisify(fs.writeFile);
const readFile = util.primisify(fs.readFile);
const notesData = './db.json';

class Db {

    async addNote(data) {
        try {
            await writeFile(notesData, JSON.stringify(data, null, '\t')).then(() => {
                console.log('Note Added Successfully');
            });
        }catch(error) {

        }
    }

    deleteNote(data) {

    }

    read() {

    }

}

module.exports = new Db();