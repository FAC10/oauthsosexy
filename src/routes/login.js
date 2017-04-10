require('env2')('./config.env');

const login = {
  method: 'GET',
  path: '/login',
  handler: (req, reply) => {
    console.log(process.env.CLIENT_ID, '<<<<<<<<');
    reply.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}`);
  }
}

module.exports = login;
