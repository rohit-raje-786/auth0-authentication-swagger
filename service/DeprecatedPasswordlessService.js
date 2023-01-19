'use strict';


/**
 * Login using a phone number and verification code
 * Given the user credentials and the connection specified, it will do the authentication on the provider and return a JSON with the access_token and id_token. This endpoint only works for database connections, passwordless connections, Active Directory/LDAP, Windows Azure AD and ADFS. **This endpoint is deprecated**.
 *
 * no response value expected for this operation
 **/
exports.oauthRoPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

