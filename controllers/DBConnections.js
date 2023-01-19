'use strict';

var utils = require('../utils/writer.js');
var DBConnections = require('../service/DBConnectionsService');

module.exports.dbconnectionsChange_passwordPOST = function dbconnectionsChange_passwordPOST (req, res, next) {
  DBConnections.dbconnectionsChange_passwordPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dbconnectionsSignupPOST = function dbconnectionsSignupPOST (req, res, next) {
  DBConnections.dbconnectionsSignupPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
