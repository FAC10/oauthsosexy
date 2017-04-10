const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes/routes.js');
const login = require('./routes/login.js');
const fs = require('fs');
const path = require ('path');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
  tls: {
       key: fs.readFileSync(path.join(__dirname, '../keys/key.pem'), 'utf8'),
       cert: fs.readFileSync(path.join(__dirname, '../keys/cert.pem'), 'utf8')
   }
});

server.register(inert, (err) => {
  if (err) throw err;

  server.route(routes);
  server.route(login);
});

server.start((err) => {
  if (err) throw err;
  console.log(`Server is running at ${server.info.uri}`);
});

module.exports = server;
