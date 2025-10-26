import os from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const cpuCoresCount = os.cpus().length;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const workerFilePath = resolve(__dirname, 'worker.js');
  const workerPromises = [];

  for (let i = 0; i < cpuCoresCount; i++) {
    workerPromises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerFilePath, {
          workerData: { n: 10 + i },
        });

        let result;

        worker.once('message', (msg) => {
          result = msg;
        });

        worker.once('error', () => {
          resolve({ status: 'error', data: null });
        });

        worker.once('exit', (code) => {
          if (code === 0) {
            resolve({ status: 'resolved', data: result });
          } else {
            resolve({ status: 'error', data: null });
          }
        });
      })
    );
  }

  const workerResults = await Promise.all(workerPromises);
  console.log(workerResults);
};

await performCalculations();
