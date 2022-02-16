const net = require("net");
const {IP,PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP ,// IP address here,
    port: PORT// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CPR");
  })

  // for (let i = 0; i < 100; i++) {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 500 * i);
  // }
  


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };