const net = require('net');
const EventEmitter = require('events');
const util = require('util');
const fs = require('fs');

let emitEvent = new EventEmitter();

// function call_back() {
//   console.log('Call back has been called');
// }

let server = net.createServer((socket) => {
  // socket.end('goodbye\n');
  socket.setEncoding('utf8');
  socket.write('connected');
  process.stdin.pipe(socket);
  // socket.on('pipe', function(readme) {
  //     console.log('i have been seen')
  // })
  // socket.on('event', (chunk) => {
  //  console.log(call_back);

  // });


    // (socket) => {
    // console.log(`chunk from client ${socket}`)
  // })

})

server.listen(6969, '0.0.0.0', () => {
  console.log('opened server on ', server.address())
})
