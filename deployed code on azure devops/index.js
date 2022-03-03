const process = require('process');
var fs = require('fs');

console.log("current working directory: " +
    process.cwd());




// Printing current directory

try {

    // Change the directory
    process.chdir('../../../var/www/html/amandir');
    console.log("working directory after " +
        "changing: " + process.cwd());

    // create a folder in azure fileshare
    fs.mkdir('./temple', { recursive: true }, (err) => {
        if (err) throw err;
    });

    // read a given file in azure fileshare
    fs.readFile('./polynomial.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })


    // writeFile function with filename, content and callback function
    fs.writeFile('./newfile2.txt', 'Learn Node FS module12345', function(err) {
        if (err) {
            console.log("error: ", err);
            throw err;
        }

        console.log('File is created successfully.');
    });




} catch (err) {

    // Printing error if occurs
    console.error("error occured while " +
        "changing directory: " + err);
}