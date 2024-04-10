"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var node_1 = require("./node");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mainMenu() {
    console.log('\nHauptmenü:');
    console.log('1. Notiz hinzufügen');
    console.log('2. Notizen anzeigen');
    console.log('3. Notiz löschen');
    console.log('4. Beenden');
    rl.question('Wählen Sie eine Option: ', function (answer) {
        switch (answer) {
            case '1':
                rl.question('Geben Sie die Notiz ein: ', function (note) {
                    (0, node_1.addNote)(note);
                    mainMenu();
                });
                break;
            case '2':
                (0, node_1.showNotes)();
                mainMenu();
                break;
            case '3':
                rl.question('Geben Sie den Text der zu löschenden Notiz ein: ', function (noteToDelete) {
                    (0, node_1.deleteNote)(noteToDelete);
                    mainMenu();
                });
                break;
            case '4':
                console.log('Auf Wiedersehen!');
                rl.close();
                break;
            default:
                console.log('Ungültige Option.');
                mainMenu();
                break;
        }
    });
}
mainMenu();
