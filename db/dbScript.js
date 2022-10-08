//local requirements
const util = require('util');
const fs = require('fs');
//local variables
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);
const notesData = './db.json';

//class def
class Db {

    async add(data) {
        try {
            await writeFile(notesData, JSON.stringify(data, null, '\t')).then(() => {
                console.log('Note Added Successfully');
            });
        }catch(error) {
            throw error;
        }
    }

    async delete(data) {
        try {
            await writeFile(notesData, JSON.stringify(data, null, '\t')).then(() => {
                console.log('Note Deleted Successfully');
            });
        }catch(error) {
            throw error;
        }
    }

    async read() {
        try {
            const notesOutput = await readFile(notesData, 'UTF8');
            return notesOutput ? JSON.parse(notesOutput) : [];
        }catch(error) {
            throw error;
        }
    }

}

module.exports = new Db();