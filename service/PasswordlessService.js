'use strict';


/**
 * Start Passwordless flow sending an SMS message
 * Given the user phone_number, it will send a SMS message with a verification code. You can then authenticate with this user using the /oauth/ro endpoint specifying phone_number as username and code as password:
 *
 * no response value expected for this operation
 **/
exports.passwordlessStartPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

