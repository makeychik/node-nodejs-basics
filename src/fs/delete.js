import { rm } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const filename = 'fileToRemove.txt';
  const pathToRemove = path.resolve('src', 'fs', 'files', filename);

  try {
    await rm(pathToRemove);
    console.log('Successfully removed a file');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await remove();
