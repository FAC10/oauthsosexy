const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
});

server.register(inert, (err) => {
  if (err) throw err;

  server.route(routes);
});

server.start((err) => {
  if (err) throw err;
  console.log(`Server is running at ${server.info.uri}`);
});

module.exports = server; 
