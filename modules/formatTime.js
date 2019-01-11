function formatTime(uptime) {
  var hours = Math.floor(uptime / 3600);
  var minutes = Math.floor(uptime % 3600 / 60);
  var seconds = Math.floor((uptime % 3600) - minutes * 60);
  var displayUptime = '';

  if (hours > 0) {
    displayUptime += hours + ' hours ';
  }
  if (minutes > 0) {
    displayUptime += minutes + ' minutes ';
  }
  if (seconds > 0) {
    displayUptime += seconds + ' seconds ';
  }

  return displayUptime;

};

exports.print = formatTime;