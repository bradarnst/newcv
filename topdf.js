const fs = require('fs');
// import fs from 'fs';

const dir = './_site/docs';
const  execSync  = require("child_process").execSync;
const title = 'Brad CV';
const htmlInput = '_site/index.html';
const pdfOut = '_site/docs/bradcv.pdf';
// const file = 'test.pdf';
const myRegex = /(\/Page\n[^]*?endobj\n\n)[^]*?endobj[^]*?endobj\n/;


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// exec("wkhtmltopdf --enable-local-file-access --print-media-type --disable-smart-shrinking _site/index.html _site/docs/bradcv.pdf", (error, stdout, stderr) => {
//     if (error) {

execSync(`pandoc --css=_site/css/print.css --pdf-engine=wkhtmltopdf  ${htmlInput} -o ${pdfOut}`, (error, stdout, stderr) => {

// execSync(`prince --media=print --page-size=A4 --pdf-title="${title}" ${htmlInput} -o ${pdfOut}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
        process.exit(0);
    }
    if (stderr) {
        console.log(`${stderr}`);
        return;
        process.exit(0);
    }
    console.log(`stdout: ${stdout}`);
});

// fs.readFile(pdfOut,'binary', function(err, stringFromFile) {
//   if (err) throw err;
//   // console.log(myRegex.test(stringFromFile));
//   // console.log(stringFromFile);
//   let changedFile = stringFromFile.replace( myRegex, '$1');
//   fs.writeFile(pdfOut, changedFile, 'binary', function (err) {
//   if (err) throw err;
//   });
// });
