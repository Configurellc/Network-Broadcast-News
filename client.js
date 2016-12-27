const net = require('net');

const server = net.createConnection(6969, () => {
  console.log('connected');
  server.write('world\n');
})

// client.on('data', (data) => {


// })