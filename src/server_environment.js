let envJson = JSON.stringify(process.env);
let content = "var x = " + envJson + ";" + "module.exports = x ;"
console.log("Generating server environment file")
const fs = require('fs');

fs.writeFile("node-env.js", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("File saved!");
    console.log("Please wait!");

});
