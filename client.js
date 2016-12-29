const net = require('net');
const EventEmitter = require('events');
const util = require('util');
const fs = require('fs');

const server = net.createConnection(6969, () => {
  console.log('connected');
  // server.write('world\n');
  process.stdin.pipe(server);
})


server.on('data', (data) => {
  console.log(`Server Broadcast : ${data}`)

})