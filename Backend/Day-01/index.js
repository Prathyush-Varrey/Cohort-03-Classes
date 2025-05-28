const fs = require('fs');


/**
 * Reads a file asynchronously and logs its contents to the console.
 * This function will read the file asynchronously and log an error to the console
 * if there is an error reading the file. If no error occurs, it logs the file
 * contents to the console.
 * @function readFile_me
 * @param {string} txt_file - path to the file to be read.
 * @param {string} [encoding="utf8"] - encoding to be used while reading the file.
 */
function readFile_me(txt_file, encoding = "utf8") {
     // Read the file asynchronously
     fs.readFile(txt_file, encoding, (error, data) => {
          if (error) {
               // if there is an error, log it to the console
               console.error('Error reading file:', error);
          }
          else {
               // if no error occurs, log the file contents to the console
               console.log('File contents:', data);
          }
     })
}

console.log(__dirname);


readFile_me('a.txt');