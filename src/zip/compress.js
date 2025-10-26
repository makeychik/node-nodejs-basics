import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = resolve(__dirname, 'files', 'archive.gz');

  await pipeline(
    createReadStream(filePath),
    createGzip(),
    createWriteStream(zipPath)
  );
};

await compress();
