const parseEnv = () => {
  const entries = Object.entries(process.env);
  const resultStrings = entries.reduce((result, [key, value]) => {
    if (key.startsWith('RSS_')) {
      result.push(`${key} is ${value}`);
    }
    return result;
  }, []);

  console.log(resultStrings.join(', '));
};

parseEnv();
