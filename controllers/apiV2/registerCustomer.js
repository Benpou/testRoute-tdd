const express = require('express');
const router = express.Router();

const registerCustomer = require('../../services/registerCustomer');

router.all('/api/v2/registerCustomer', (req, res) => {
  
  registerCustomer.get((error, response) => {
    
    if (error) {
      res.status(500).send(`Internal Error: ${error}`);
      return;
    }
    res.send(`This is register Customer page V2 -- ^ ^ -- ${req.route.path}`);
    res.status(200);
  });
});



module.exports = router;
