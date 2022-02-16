const net = require('net');
const {connect} = require("./client.js");
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn; 
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
    // console.log("UP"); // check to see if input is working
    connection.write('Move: up');
  }
  if (key === 'a' || key === '\u001b[D') { // Arrow key LEFT (telnet key)
    // console.log("LEFT"); // check to see if input is working
    connection.write('Move: left');
  }
  if (key === 's' || key === '\u001b[B') { // Arrow Key DOWN (telnet key)
    // console.log("DOWN"); // check to see if input is working
    connection.write('Move: down');
  }
  if (key === 'd' || key === '\u001b[C') { // Arrow Key RIGHT (telnet key)
    // console.log("RIGHT"); // check to see if input is working
    connection.write('Move: right');
  }
};

module.exports = { setupInput };