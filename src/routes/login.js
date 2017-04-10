const login = {
  method: 'GET',
  path: '/login',
  handler: (req, reply) => {
    // client_id = '26b6c48fd2c6a4f14bd2';
    redirect_uri = 'https://localhost:3000/';
    reply.redirect('https://github.com/login/oauth/authorize?client_id=26b6c48fd2c6a4f14bd2');
  }
}

module.exports = login;
