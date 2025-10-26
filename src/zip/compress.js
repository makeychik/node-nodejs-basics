import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = resolve(__dirname, 'files', 'archive.gz');
  createReadStream(filePath)
    .pipe(createGzip())
    .pipe(createWriteStream(zipPath));
};

await compress();
