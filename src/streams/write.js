import { createWriteStream } from 'node:fs';
import path from 'node:path';

const write = async () => {
  const filePath = path.resolve('src', 'streams', 'files', 'fileToWrite.txt');
  process.stdin.pipe(createWriteStream(filePath));
};

await write();
