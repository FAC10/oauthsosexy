const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.file('./public/index.html');
  }
}

module.exports = home;
