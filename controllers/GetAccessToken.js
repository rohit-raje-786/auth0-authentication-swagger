'use strict';

var utils = require('../utils/writer.js');
var GetAccessToken = require('../service/GetAccessTokenService');

module.exports.oauthTokenPOST = function oauthTokenPOST (req, res, next, contentType) {
  GetAccessToken.oauthTokenPOST(contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
