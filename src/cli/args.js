const parseArgs = () => {
  // args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2
  const argumentsArray = process.argv;
  const resultStrings = argumentsArray.reduce((result, current, index) => {
    if (current.startsWith('--')) {
      result.push(`${current.slice(2)} is ${argumentsArray[index + 1]}`);
    }
    return result;
  }, []);
  console.log(resultStrings.join(', '));
};

parseArgs();
