import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { dirname, resolve } from 'node:path';
import { finished, pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = crypto.createHash('sha256');
  hash.setEncoding('hex');

  await pipeline(createReadStream(filePath), hash);

  hash.pipe(process.stdout, { end: false });
  await finished(hash);
  process.stdout.write(`${EOL}`);
};

await calculateHash();
