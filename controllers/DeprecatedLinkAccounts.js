'use strict';

var utils = require('../utils/writer.js');
var DeprecatedLinkAccounts = require('../service/DeprecatedLinkAccountsService');

module.exports.unlinkPOST = function unlinkPOST (req, res, next) {
  DeprecatedLinkAccounts.unlinkPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
