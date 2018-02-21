const fs = require('fs')

function sayHello(inFile, outFile) {
    fs.readFile(inFile, (error, text) => {
        if (error) throw error;
    const outText = `Hello, ${text}`;
    fs.writeFile(outFile, outText, 'utf-8', function(err) {
        if (err) throw err;
        console.log('ok');
    });
});
}

module.exports = sayHello;
