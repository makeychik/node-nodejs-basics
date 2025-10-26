const parseArgs = () => {
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
