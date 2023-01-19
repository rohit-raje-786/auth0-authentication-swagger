'use strict';

var utils = require('../utils/writer.js');
var DeprecatedPasswordless = require('../service/DeprecatedPasswordlessService');

module.exports.oauthRoPOST = function oauthRoPOST (req, res, next) {
  DeprecatedPasswordless.oauthRoPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
