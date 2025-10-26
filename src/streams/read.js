import { once } from 'node:events';
import { createReadStream } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  readStream.pipe(process.stdout, {
    end: false,
  });
  await once(readStream, 'end');
  process.stdout.write('\n');
};

await read();
