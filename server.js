console.log("I am server.js")

const express = require('express'),
    mongoose = require('mongoose')
    bp = require('body-parser'),
    app = express(),
    port = 8000,
    DB_NAME = "tasks";


app.use(bp.json());
require('./server/utils/mongoose')(DB_NAME); // 
require('./server/utils/routes')(app);


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});




