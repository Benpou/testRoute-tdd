const express = require('express');
const router = express.Router();

const apiV1 = require('../../routes/routes');

const emailVerification = require('./emailVerification');
const registerCustomer = require('./registerCustomer');


router.all('/api/v1*', (req, res, next) => {
  next();
});

router.use(emailVerification);
router.use(registerCustomer);





module.exports = router;
