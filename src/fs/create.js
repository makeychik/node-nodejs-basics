import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  //create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
  const fileName = 'fresh.txt';
  const filePath = path.resolve('src', 'fs', 'files', fileName);
  const content = 'I am fresh and young';

  try {
    await writeFile(filePath, content, { flag: 'wx' });
    console.log('Successfully created a file');
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await create();
