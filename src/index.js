const jwt = require('jsonwebtoken');

module.exports = {
  stringify: function(json, secret) {
    return jwt.sign({ json }, secret);
  },

  parse: function(token, secret) {
    if (!secret) {
      secret = localStorage.getItem('token-secret');
    }

    return jwt.verify(token, secret).json;
  }
};
