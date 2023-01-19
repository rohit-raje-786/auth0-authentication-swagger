'use strict';


/**
 * Obtain a delegation token (from a refresh_token)
 * Given an refrersh token, this endpoint will generate a refreshed id_token and access_token. **This endpoint has been deprecated**, please use the [OAuth2 conformant Refresh Token flow](https://auth0.com/docs/tokens/refresh-token/current).
 *
 * no response value expected for this operation
 **/
exports.delegationPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

