const fs = require('fs');
const dir = './_site/docs';
const { exec } = require("child_process");

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

exec("wkhtmltopdf _site/index.html _site/docs/bradcv.pdf", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});