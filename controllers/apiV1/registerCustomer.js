const express = require('express');
const router = express.Router();

const registerCustomer = require('../../services/registerCustomer');

router.all('/api/v1/registerCustomer', (req, res) => {
  
  registerCustomer.get((error, response) => {
    
    if (error) {
      res.status(400).send(error);
      return;
    }
    res.send(`This is register Customer V1 -- ^ ^ -- ${req.route.path}`);
    res.status(200);
  })
});

module.exports = router;
