import { readFile } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const filename = 'fileToRead.txt';
  const pathToRead = path.resolve('src', 'fs', 'files', filename);

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
