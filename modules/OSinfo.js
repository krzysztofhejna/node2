var os = require('os');
var formatTime = require('./formatTime');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  if(type === 'Darwin') {
      type = 'OSX';
  } else if(type === 'Windows_NT') {
      type = 'Windows';
  }
  console.log('System:'.gray, type);
  console.log('Release:'.red, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime: ~'.green, formatTime.print(uptime));
  console.log('User name:'.yellow, userInfo.username);
  console.log('Home dir:'.grey, userInfo.homedir);
};

exports.print = getOSinfo;