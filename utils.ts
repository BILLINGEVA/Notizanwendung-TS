import * as fs from 'fs';

function addNote(note: string): void {
    fs.appendFileSync('notes.txt', note + '\n');
    console.log('Die Notiz wurde hinzugefügt.');
}

function showNotes(): void {
    const notes = fs.readFileSync('notes.txt', 'utf8').split('\n').filter(Boolean);
    console.log('Notizen:');
    notes.forEach((note, index) => console.log(`${index + 1}. ${note}`));
}

function deleteNote(noteToDelete: string): void {
    const notes = fs.readFileSync('notes.txt', 'utf8').split('\n').filter(Boolean);
    const updatedNotes = notes.filter(note => note !== noteToDelete);
    fs.writeFileSync('notes.txt', updatedNotes.join('\n'));
    console.log('Die Notiz wurde gelöscht.');
}

export {
    addNote,
    showNotes,
    deleteNote
};
