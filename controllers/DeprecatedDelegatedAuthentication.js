'use strict';

var utils = require('../utils/writer.js');
var DeprecatedDelegatedAuthentication = require('../service/DeprecatedDelegatedAuthenticationService');

module.exports.delegationPOST = function delegationPOST (req, res, next) {
  DeprecatedDelegatedAuthentication.delegationPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
