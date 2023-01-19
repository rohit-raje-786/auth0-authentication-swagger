'use strict';

var utils = require('../utils/writer.js');
var UserProfile = require('../service/UserProfileService');

module.exports.userinfoGET = function userinfoGET (req, res, next, authorization) {
  UserProfile.userinfoGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
