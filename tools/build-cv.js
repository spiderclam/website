import * as fs from 'node:fs';
import * as http from 'node:http';
import * as path from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 8000;
const DEBUG = false;
const MIME_TYPES = {
	default: 'application/octet-stream',
	html: 'text/html; charset=UTF-8',
	js: 'application/javascript',
	css: 'text/css',
	png: 'image/png',
	webp: 'image/webp',
	jpg: 'image/jpg',
	pdf: 'image/pdf',
	ico: 'image/x-icon',
	svg: 'image/svg+xml'
};
const STATIC_PATH = path.join(process.cwd(), 'build');
const PDF_PATH = path.join(process.cwd(), 'src', 'routes', 'about', 'Resume-Wesley-Overdijk.pdf');

async function handleRequest(req, res) {
	const url = req.url.split('?')[0];
	const paths = [STATIC_PATH, url];

	if (url === '/') {
		paths.push('index.html')
	} else if (!url.match(/\.\w{2,6}(\?|$)/)) { // @todo try using path.extname
		paths[1] += '.html';
	}

	const filePath = path.join(...paths);
	const found = await fs.promises.access(filePath).then(() => true, () => false);
	const k = await fs.promises.access(filePath);
	const streamPath = found ? filePath : STATIC_PATH + '/404.html';
	const statusCode = found ? 200 : 404;
	const mimeType = MIME_TYPES[path.extname(streamPath).substring(1).toLowerCase()] || MIME_TYPES.default;

	res.writeHead(statusCode, { 'Content-Type': mimeType });

	fs.createReadStream(streamPath).pipe(res);
	if (DEBUG) console.log(`${req.method} ${req.url} ${statusCode}`);
}

async function printPDF() {
	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.goto(`http://127.0.0.1:${PORT}/about`, { waitUntil: 'networkidle0' });
	
	await page.pdf({ format: 'A4', path: PDF_PATH, displayHeaderFooter: false });

	await browser.close();

	// fs.writeFileSync(PDF_PATH, pdf);
}

// Step 1: set up server.
const server = http
	.createServer(handleRequest);

if (DEBUG) console.log(`Server running at http://127.0.0.1:${PORT}/`);

// Step 2: start listening
server.listen(PORT);

// Step 3: print the about page to pdf
await printPDF();

// Step 4: close the server
server.close()
