const argv = process.argv.slice(2);

const alarm = (arrayOfseconds) => {
  arrayOfseconds.sort();
  for (let delay of arrayOfseconds) {
    delay = delay * 1000;
    setTimeout(() => process.stdout.write('\x07'), delay);
  }
};

alarm(argv);
