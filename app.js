const express=require('express');
const app=express();
const morgan=require('morgan');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const path = require('path');

const videosRoutes=require('./server/routes/videos');
const userRoutes=require('./server/routes/users');

const db="mongodb://marciocba:"+(process.env.MONGO_MLAB_PW)+"@ds055545.mlab.com:55545/videoplayer";
mongoose.Promise=global.Promise;
mongoose.connect(db,err=>{
    if (err){
        console.error("Error! "+err );
    }
})

videosRoutes.use(morgan('dev'));

//const app = express();

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH");
        return res.status(200).json({});
    }
    next();
});

app.use('/api',videosRoutes);
app.use('/api/admin',userRoutes);
app.use('*', (req,res)=>{
    res.sendfile(path.join(__dirname,'dist/index.html'))
});
app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message
        }
    })
});

module.exports=app;