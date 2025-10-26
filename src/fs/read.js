import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToReadName = 'fileToRead.txt';
  const pathToRead = resolve(__dirname, 'files', fileToReadName);

  try {
    const fileContent = await readFile(pathToRead, { encoding: 'utf-8' });
    console.log(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await read();
