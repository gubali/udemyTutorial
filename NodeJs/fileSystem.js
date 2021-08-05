/**
 * writing text to file
 */

var fs = require("fs");
console.log("Typing text to file");
fs.writeFile("writing.txt", "Asif -Writing text to file", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Writing done !");
})