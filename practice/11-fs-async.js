const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err2, result2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    const second = result2;
    writeFile(
      "./content/result-async.txt",
      `Here is the result ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
