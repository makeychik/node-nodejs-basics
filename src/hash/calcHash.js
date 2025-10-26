import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = crypto.createHash('sha256');
  hash.setEncoding('hex');

  createReadStream(filePath)
    .pipe(hash)
    .on('finish', () => console.log(hash.read()));
};

await calculateHash();
