const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const { check, expressValidator } = require('express-validator');


const port = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);




app.listen(port, console.log(`app is running on port:  ${port}`));


