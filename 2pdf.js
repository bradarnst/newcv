const html_to_pdf = require('html-pdf-node');


let file = { url: 'file:////home/brad/work/mynewcv/_site/index.html' }

let options = {
	format: 'A4',
	path: './_site/docs/bradcv.pdf',
	printBackground: true,
	margin: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0 }
	}

html_to_pdf.generatePdf(file,options).then(pdfBuffer => {});


