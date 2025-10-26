import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import path from 'node:path';

const compress = async () => {
  const filePath = path.resolve('src', 'zip', 'files', 'fileToCompress.txt');
  const zipPath = path.resolve('src', 'zip', 'files', 'archive.gz');
  createReadStream(filePath)
    .pipe(createGzip())
    .pipe(createWriteStream(zipPath));
};

await compress();
