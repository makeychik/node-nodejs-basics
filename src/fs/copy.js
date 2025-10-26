import { cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const sourcePath = path.resolve('src', 'fs', 'files');
  const destinationPath = path.resolve('src', 'fs', 'files_copy');

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
