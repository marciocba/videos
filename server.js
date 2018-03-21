/* const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan=require('morgan');

const api=require('./server/routes/api');
const userRoutes=require('./server/routes/user');
 */
/* const port=process.env.PORT || 3000;

app.listen(port,function () {
    console.log("server is runnning on localhost:"+port);
}) */

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
//app.all('/video/*', [require('./server/middlewares/validateRequest')]);

const http=require('http');
const app=require('./app');

const port=process.env.PORT||3000;

const server=http.createServer(app);

server.listen(port,function () {
    console.log("server is runnning on localhost:"+port);
});

