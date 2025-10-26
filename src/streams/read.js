import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { dirname, resolve } from 'node:path';
import { finished } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  readStream.pipe(process.stdout, {
    end: false,
  });
  await finished(readStream);
  process.stdout.write(`${EOL}`);
};

await read();
