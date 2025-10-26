import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
  const cpuCoresCount = os.cpus().length;
  const workerFilePath = path.resolve('src', 'wt', 'worker.js');
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
