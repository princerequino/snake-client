const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.28.77.148' ,// IP address here,
    port: 50541// PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CPR");
  })

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      conn.write("Move: up");
    }, 500 * i);
  }
  


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

connect();


module.exports = { connect };