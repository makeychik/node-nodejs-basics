import { writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileToCreateName = 'fresh.txt';
  const filePath = resolve(__dirname, 'files', fileToCreateName);
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
