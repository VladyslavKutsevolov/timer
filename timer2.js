const argv = process.argv.slice(2);

const alarm = (arrayOfseconds) => {
  arrayOfseconds.sort();
  for (let delay of arrayOfseconds) {
    if (!delay) {
      console.log(
        "Input should be only numbers or 'b' to get alarm right away"
      );
      return;
    }
    if (delay === 'b') {
      delay = 0;
    }

    console.log(`setting timer for ${delay} seconds...`);
    delay = delay * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
  process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
  });

  process.on('SIGINT', () => {
    console.log('\n Thanks for using me, ciao!');
    process.exit();
  });
};
alarm(argv);
