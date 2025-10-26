import { rename as fsRename } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const oldFilename = 'wrongFilename.txt';
  const newFilename = 'properFilename.md';
  const commonPath = resolve(__dirname, 'files');
  const oldPath = resolve(commonPath, oldFilename);
  const newPath = resolve(commonPath, newFilename);

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
