'use strict';

var utils = require('../utils/writer.js');
var DeprecatedAuthenticate = require('../service/DeprecatedAuthenticateService');

module.exports.oauthAccess_tokenPOST = function oauthAccess_tokenPOST (req, res, next) {
  DeprecatedAuthenticate.oauthAccess_tokenPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tokeninfoPOST = function tokeninfoPOST (req, res, next) {
  DeprecatedAuthenticate.tokeninfoPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
