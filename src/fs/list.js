import { readdir } from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  // list.js - implement function that prints array of all filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
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
