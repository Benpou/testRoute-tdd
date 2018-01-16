const express = require('express');
const routes = express.Router();

const expressValidator = require('express-validator');
//const check = require('express-validator');

routes.use(expressValidator());


const emailVerification = require('../../services/emailVerification');



routes.all('/api/v1/emailVerification', function (req, res) {
  
  console.log('email ', req.query);
  const reqQquery = req.query.email;
  console.log(reqQquery);
  req.checkQuery('email', 'Enter a valid email address.').isEmail();
  
  let errors = req.validationErrors();
  
  if (errors) {
    res.status(400).send(errors);
    return;
  } else {
    console.log('you did it');
    emailVerification.get((error, response) => {

      if (error) {
        res.status(500).send(`Internal Error: ${error}`);
        return;
      }
      res.send(`This is email Verification page V1 -- ^ ^ -- ${req.route.path}`);
      res.status(200);
    });
  }
  
  // emailVerification.get((error, response) => {
  //
  //   if (error) {
  //     res.status(500).send(`Internal Error: ${error}`);
  //     return;
  //   }
  //   res.send(`This is email Verification page V1 -- ^ ^ --:
  //     ${req.route.path},
  //     ${typeof(req.query.query)}`
  //   );
  //
  //   res.status(200);
  // });
});


module.exports = routes;
