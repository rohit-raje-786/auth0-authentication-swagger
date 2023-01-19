'use strict';

var utils = require('../utils/writer.js');
var SAML = require('../service/SAMLService');

module.exports.samlpClient_idGET = function samlpClient_idGET (req, res, next, client_id) {
  SAML.samlpClient_idGET(client_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.samlpMetadataClient_idGET = function samlpMetadataClient_idGET (req, res, next, client_id) {
  SAML.samlpMetadataClient_idGET(client_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
