import { Transform } from 'node:stream';

const transform = async () => {
  // transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
  const reversingStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });
  process.stdin.pipe(reversingStream).pipe(process.stdout);
};

await transform();
