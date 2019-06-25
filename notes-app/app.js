/*jshint esversion: 6 */
const fs = require('fs');

//fs.writeFileSync('notes.txt', 'I\'m Joe and I\'m a Javascript Ninja!');

fs.appendFileSync('notes.txt', 'My Ninjitsu getchu all worked up!');

/*
Challenge: Append a message to notes.txt
1. Use appendFileSync to append to the file
2. Run the script
3. Check work by viewing the file
*/