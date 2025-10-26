import { spawn } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const scriptPath = path.resolve('src', 'cp', 'files', 'script.js');
  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  return new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', (code, signal) => resolve({ code, signal }));
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'world']);
