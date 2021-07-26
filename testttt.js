console.log('asdadas')
var fs = require('fs');
fs.writeFile("./tttttest.txt", "hello world!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});