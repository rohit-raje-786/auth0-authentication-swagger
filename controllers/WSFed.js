'use strict';

var utils = require('../utils/writer.js');
var WSFed = require('../service/WSFedService');

module.exports.wsfedClient_idGET = function wsfedClient_idGET (req, res, next, client_id, wa) {
  WSFed.wsfedClient_idGET(client_id, wa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wsfedFederationMetadata2007_06FederationMetadata_xmlGET = function wsfedFederationMetadata2007_06FederationMetadata_xmlGET (req, res, next) {
  WSFed.wsfedFederationMetadata2007_06FederationMetadata_xmlGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
