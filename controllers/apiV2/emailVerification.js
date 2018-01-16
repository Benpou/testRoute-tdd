const express = require('express');
const routes = express.Router();

//const apiV1 = require('../../routes/routes');
//const apiv1 = require('../../routes/apiV1Routes_config');

const emailVerification = require('../../services/emailVerification');
routes.all('/api/v2/emailVerification', function (req, res) {
  
  
  emailVerification.get((error, response) => {
    if (error) {
      res.status(500).send(`Internal Error: ${error}`);
      return;
    }
    res.send(`This is email Verification page V2 -- ^ ^ -- ${req.route.path}`);
    res.status(200);
  });
  
});


module.exports = routes;
