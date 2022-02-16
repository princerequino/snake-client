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
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();