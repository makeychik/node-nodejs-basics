import { createWriteStream } from 'node:fs';
import path from 'node:path';

const write = async () => {
  // write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
  const filePath = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');
  process.stdin.pipe(createWriteStream(filePath));
};

await write();
