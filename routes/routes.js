'use restrict';

const express = require('express');
const routes = express.Router();

const apiV1 = require('../controllers/apiV1/home');
const apiV2 = require('../controllers/apiV2/home');

// takes the url and based on the api version, redirect the request
routes.all('/api/:version', (req, res, next) => {
  console.log('path ==> ', req.route.path);
  console.log('params ===> ', req.params.version);
  let reqParams = req.params.version;
  console.log('reqParams ====> ', reqParams);

  // let newdisc = Object.keys(reqParams).map(xx => reqParams[xx]);
  // console.log(newdisc);

  if (reqParams === 'v1') {
    
    next();
  } else if (reqParams === 'v2') {
    
    next()
  } else {
    res.status(404).send('Wrong url. oops 404');
  }
});

// after finding the api version, the middleware redirect the request to the controllers
routes.use(apiV1);
routes.use(apiV2);

module.exports = routes;


