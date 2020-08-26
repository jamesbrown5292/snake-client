const { stdout } = require("process");

const setupInput = function(conn) {
  let connection;
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = () => {
    let direction;
    let moveUp;
    let moveDown;
    let moveLeft;
    let moveRight;
    let interval;
    // function - current command === one running already? Yes fine, no clear relevant interval
    //on key pressed; clear intervalRunning; return keypress function (name each of the below and feed in)
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (['w', 's'].includes(key) && ['up', 'down'].includes(direction)) {
        return;
      } else if (['a', 'd'].includes(key) && ['left', 'right'].includes(direction)) {
        return;
      };
      console.log(key);
      switch (key) {
        case 'w':
          clearInterval(interval);
          interval = setInterval(() => {direction = 'up';
          conn.write("Move: up")}, 100);
          break;
        case 'a':
          clearInterval(interval);
          interval = setInterval(() => {direction = 'left';
          conn.write("Move: left")}, 100);
          break;

        case 's':
          clearInterval(interval);
          interval = setInterval(() => {direction = 'down';
          conn.write("Move: down")}, 100);
          break;

        case 'd':
          clearInterval(interval);
          interval = setInterval(() => {direction = 'right';
          conn.write("Move: right")}, 100);
          break;

      }
    });
  }
  handleUserInput();
  return stdin;  
};
module.exports = { setupInput };
//is move prohibited? //Look at direction //if not, 