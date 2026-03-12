import { createServer } from 'http';
import { readFileSync } from 'fs';

const html = readFileSync('./index.html', 'utf8');
const port = process.env.PORT || 3000;

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(port, () => console.log(`Links page running on port ${port}`));
