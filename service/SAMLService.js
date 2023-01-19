'use strict';


/**
 * Accepts a SAML request to initiate a login
 * Optionally, accepts a connection parameter to login with a specific provider. If no connection is specified, the Auth0 Login Page will be shown.
 *
 * client_id String 
 * no response value expected for this operation
 **/
exports.samlpClient_idGET = function(client_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns the SAML 2.0 metadata
 *
 * client_id String 
 * no response value expected for this operation
 **/
exports.samlpMetadataClient_idGET = function(client_id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

