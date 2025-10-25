import crypto from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';

const calculateHash = async () => {
  // calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
  const filePath = path.resolve(
    'src',
    'hash',
    'files',
    'fileToCalculateHashFor.txt'
  );

  const hash = crypto.createHash('sha256');
  hash.setEncoding('hex');

  createReadStream(filePath)
    .pipe(hash)
    .on('finish', () => console.log(hash.read()));
};

await calculateHash();
