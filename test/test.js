const tape = require('tape');
const server = require('../src/server.js');


tape('Test our routes', (t) => {
  const options = {
    url: '/',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'Response has status code of 200');
    t.end();
  });
});
