import { once } from 'node:events';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

const read = async () => {
  // read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
  const filePath = path.resolve('src', 'streams', 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  readStream.pipe(process.stdout, {
    end: false,
  });
  await once(readStream, 'end');
  process.stdout.write('\n');
};

await read();
