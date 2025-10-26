import { rename as fsRename } from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  const oldFilename = 'wrongFilename.txt';
  const newFilename = 'properFilename.md';
  const commonPath = path.resolve('src', 'fs', 'files');
  const oldPath = path.resolve(commonPath, oldFilename);
  const newPath = path.resolve(commonPath, newFilename);

  try {
    await fsRename(oldPath, newPath);
    console.log('Successfully renamed a file');
  } catch (error) {
    console.log(JSON.stringify(error));
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await rename();
