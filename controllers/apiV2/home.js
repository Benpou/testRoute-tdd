const express = require('express');
const router = express.Router();

const apiV2 = require('../../routes/routes');

const emailVerification = require('./emailVerification');
const registerCustomer = require('./registerCustomer');


// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// });

router.all('/api/v2*', function (req, res, next) {
  next();
});

router.use(emailVerification);
router.use(registerCustomer);

module.exports = router;
