var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input == null) {
    return;
  };
  var instruction = input.toString().trim();
  switch (instruction) {
    case '/exit':
      process.stdout.write('Quitting app!\n');
      break;
    case '/version':
      process.stdout.write('NodeJS version: ' + process.version + '\n');
      break;
    case '/language':
      process.stdout.write('Language: ' + process.env.LANG + '\n');
      break;
    case '/getOSinfo':
      OSinfo.print();
      break;
    default:
      process.stderr.write('Wrong instruction\n');
      break;
  };
});

