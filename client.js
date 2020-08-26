const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: '50542'
  });

  conn.on('connect', () => {
    console.log("Woohoo Connected!");
  });
    
  conn.on('connect', () => {
    conn.write("Name: JLB");
  });
    
  conn.on('data', () => {
      
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  return conn;
};
  
module.exports = { connect };
  