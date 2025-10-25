const parseEnv = () => {
  // env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
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
