import { createReadStream } from 'node:fs';
import path from 'node:path';

const read = async () => {
  // read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
  const filePath = path.resolve('src', 'streams', 'files', 'fileToRead.txt');
  createReadStream(filePath).pipe(process.stdout);
};

await read();
