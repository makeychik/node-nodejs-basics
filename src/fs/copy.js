import { cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = resolve(__dirname, 'files');
  const destinationPath = resolve(__dirname, 'files_copy');

  try {
    await cp(sourcePath, destinationPath, {
      force: false,
      errorOnExist: true,
      recursive: true,
    });
    console.log('Successfully created a copy of the files folder');
  } catch (error) {
    if (error.code === 'ERR_FS_CP_EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await copy();
