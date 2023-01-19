'use strict';

var utils = require('../utils/writer.js');
var Passwordless = require('../service/PasswordlessService');

module.exports.passwordlessStartPOST = function passwordlessStartPOST (req, res, next) {
  Passwordless.passwordlessStartPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
