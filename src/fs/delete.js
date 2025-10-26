import { rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToRemoveName = 'fileToRemove.txt';
  const pathToRemove = resolve(__dirname, 'files', fileToRemoveName);

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
