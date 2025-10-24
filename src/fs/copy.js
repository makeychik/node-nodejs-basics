import { cp } from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  // copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exist or files_copy has already been created Error with message FS operation failed must be thrown)
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
