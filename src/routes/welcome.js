const request = require('request');
require('env2')('./config.env');

const welcome = {
  method: 'GET',
  path: '/welcome',
  handler: (req, reply) => {
    const query = req.query;
    const options = {
      method: 'POST',
      url: `https://github.com/login/oauth/access_token?code=${query.code}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    }

    request.post(options, (err, res, body) => {
      console.log(body);
    })

    reply.redirect('/');

  }

}

module.exports = welcome;
