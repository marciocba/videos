const express = require('express');
const router=express.Router();
const mongoose =require('mongoose');
const Video=require('../models/video')

const db="mongodb://marciocba:123456@ds055545.mlab.com:55545/videoplayer";
mongoose.Promise=global.Promise;
mongoose.connect(db,err=>{
    if (err){
        console.error("Error! "+err );
    }
})

router.get('/videos',function (req,res) {
    //res.send('api works');
    console.log('Get request for all videos');
    Video.find({})
    .exec(function (err,videos) {
        if (err){
            console.log("error retrieving all videos")
        }else{
            res.json(videos);
        }
    })
});

router.get('/video/:id',function (req,res) {
    //res.send('api works');
    console.log('Get request for a single videos');
    Video.findById(req.params.id)
    .exec(function (err,video) {
        if (err){
            console.log("error retrievin video")
        }else{
            res.json(video);
        }
    })
});

router.post('/video',function (req,res) {
    console.log('Post a Video');
    var newVideo = new Video();
    newVideo.title=req.body.title;
    newVideo.url=req.body.url;
    newVideo.title=req.body.title;
    newVideo.description=req.body.description;
    newVideo.save(function(err,insertedVideo){
        if (err){
            coonsole.log('Error saving video')
        }else{
            res.json(insertedVideo)
        }
    });    
});

router.put('/video/:id',function(req,res){
    console.log('updating video'+req.body);
    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title:req.body.title, url:req.body.url, description:req.body.description}
        },
        {
            new:true
        },
        function (err,updatedVideo) {
            if (err){
                res.send("error updating video");
            }else{
                res.json(updatedVideo);
            }
        }
    );
});

router.delete('/video/:id',function(req,res){
    console.log('deleting model updated');
    Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
        if(err){
            res.send("error deleting video");
        }else{
            res.json(deletedVideo);
        }
    });

});

module.exports=router;
