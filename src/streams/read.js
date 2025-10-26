import { once } from 'node:events';
import { createReadStream } from 'node:fs';
import path from 'node:path';

const read = async () => {
  const filePath = path.resolve('src', 'streams', 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  readStream.pipe(process.stdout, {
    end: false,
  });
  await once(readStream, 'end');
  process.stdout.write('\n');
};

await read();
