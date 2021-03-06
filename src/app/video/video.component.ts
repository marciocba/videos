import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { VideoService } from '../shared/video.service';
import { Video } from '../shared/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  providers:[VideoService]
})
export class VideoComponent implements OnInit {

  videos:Array<Video>;
  
  //Video[]=[
  //  {"_id":"1","title":"title1","url":"url","description":"description"},
  //  {"_id":"2","title":"title2","url":"url2","description":"description2"}
  //];

  selectedVideo:Video;
  hidenewVideo:boolean=true;

  constructor(private _videoService:VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
    .subscribe(res=>this.videos=res);
  }

  onSelectVideo(video:any){
    this.selectedVideo=video;
    this.hidenewVideo=true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
    .subscribe(resNewVideo=>{
      this.videos.push(resNewVideo);
      this.hidenewVideo=true;
      this.selectedVideo=resNewVideo;
    })
  }

  onUpdateVideoEvent(video:Video){
    this._videoService.updateVideo(video)
    .subscribe(resUpdatedVideo=>{
      video=resUpdatedVideo
    });
    this.selectedVideo=null;
  }
  onDeleteVideoEvent(video:any){
    let videoArray=this.videos;
    this._videoService.deleteVideo(video)
    .subscribe(resDeleteVideo=>{
      for(let i=0;i<videoArray.length;i++){
        if(videoArray[i]._id===video._id){
          videoArray.splice(i,1);
        }
      }
      this.selectedVideo=null;
    });
  }
  
  newVideo(){
    this.hidenewVideo=false;
  }
}
