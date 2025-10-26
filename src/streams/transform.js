import { Transform } from 'node:stream';

const transform = async () => {
  const reversingStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    },
  });
  process.stdin.pipe(reversingStream).pipe(process.stdout);
};

await transform();
