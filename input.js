const net = require('net');
const {connect} = require("./client.js");

// setup interface to handle user input from stdin
const setupInput = function () {
 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //handleUserInput callback
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // if CTRL + C is pressed, game terminates.
    process.exit();
  }
  if (key === 'w' || key === '\u001b[A') { // Arrow key UP (telnet key)
    console.log("UP");
  }
  if (key === 'a' || key === '\u001b[D') { // Arrow key LEFT (telnet key)
    console.log("LEFT");
  }
  if (key === 's' || key === '\u001b[B') { // Arrow Key DOWN (telnet key)
    console.log("DOWN");
  }
  if (key === 'd' || key === '\u001b[C') { // Arrow Key RIGHT (telnet key)
    console.log("RIGHT");
  }
};

setupInput();

module.exports = { setupInput };