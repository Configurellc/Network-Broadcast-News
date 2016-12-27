const net = require('net');
const fs = require('fs');

var server = net.createServer((socket) => {
  // socket.end('goodbye\n');
  socket.setEncoding('utf8');
  socket.write('hello\n');
  socket.on('data', (socket) => {
    let recieveData = fs.createWriteStream()

  })

})
// .on('error', (err) => {
//   throw err;
// })

server.listen(6969, '0.0.0.0', () => {
  console.log('opened server on ', server.address())
})