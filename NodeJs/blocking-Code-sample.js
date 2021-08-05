/** blocking Or synchronous code sample*/
var fs = require("fs");
var content =fs.readFileSync("sampleText.txt");
console.log(content.toString());
console.log("Processing ti db");

/** non-blocking code sample */
console.log("****Non-Blocking Asynchronous steps********");
var fs1 = require("fs");
fs1.readFile("sampleText.txt", function(err, content) {
   if (err) 
       return console.error(err);
       console.log(content.toString());
});
console.log("Processing to other db steps");