import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import path from 'node:path';

const decompress = async () => {
  // decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
  const filePath = path.resolve('src', 'zip', 'files', 'fileToCompress.txt');
  const zipPath = path.resolve('src', 'zip', 'files', 'archive.gz');
  createReadStream(zipPath)
    .pipe(createGunzip())
    .pipe(createWriteStream(filePath));
};

await decompress();
