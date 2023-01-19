'use strict';


/**
 * Ask to change a password for a given user
 * Given the user email address and the connection specified, Auth0 will send a change password email.  * If password was provided, once the user clicks on the confirm password change link, the new password specified in this POST will be set to this user. * If password was NOT provided, once the user clicks on the password change link they will be redirected to a page asking them for a new password.  This endpoint only works for database connections.
 *
 * no response value expected for this operation
 **/
exports.dbconnectionsChange_passwordPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Signup using a username/password
 * Given the user credentials, the connection specified and the Auth0 account information, it will create a new user. You can then authenticate with this user using the /oauth/ro endpoint. This endpoint only works for database connections.
 *
 * no response value expected for this operation
 **/
exports.dbconnectionsSignupPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

