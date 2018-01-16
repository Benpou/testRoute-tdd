const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;




app.use('/', routes)




app.listen(port, console.log(`app is running on port:  ${port}`));

