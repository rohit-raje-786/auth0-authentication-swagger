'use strict';


/**
 * Unlink an account
 * **This endpoint is deprecated**. The `DELETE /api/v2/users/{id}/identities/{provider}/{user_id}` (from Management API v2) should be used instead.
 *
 * no response value expected for this operation
 **/
exports.unlinkPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

