const express = require('express');
const routes = express.Router();

const emailVerification = require('../../services/emailVerification');

routes.all('/api/v1/emailVerification', function (req, res) {
  
  
  emailVerification.get((error, response) => {
    
    if (error) {
      res.status(500).send(`Internal Error: ${error}`);
      return;
    }
    res.send(`This is email Verification page V1 -- ^ ^ -- ${req.route.path}`);
    res.status(200);
  });
  
});


module.exports = routes;
