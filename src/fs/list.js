import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  const pathToRead = path.resolve('src', 'fs', 'files');

  try {
    const listOfFiles = await readdir(pathToRead);
    console.log(listOfFiles);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await list();
