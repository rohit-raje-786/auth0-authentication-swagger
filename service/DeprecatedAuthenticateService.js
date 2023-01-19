'use strict';


/**
 * Login using a social provider's access token
 * Given the social provider's access_token and the connection specified, it will do the authentication on the provider and return a JSON with the access_token and id_token. Currently, this endpoint only works for Facebook, Google, Twitter and Weibo. **This endpoint has been deprecated**.
 *
 * no response value expected for this operation
 **/
exports.oauthAccess_tokenPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * [Deprecated] Return a user profile based on the user's JWT
 * Validates a JSON Web Token (signature and expiration) and returns the user information associated with the user id (sub property) of the token.
 *
 * no response value expected for this operation
 **/
exports.tokeninfoPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

