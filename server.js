const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api=require('./server/routes/api');
const port=process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',api);

app.use('*', (req,res)=>{
    res.sendfile(path.join(__dirname,'dist/index.html'))
});

app.listen(port,function () {
    console.log("server is runnning on localhost:"+port);
})