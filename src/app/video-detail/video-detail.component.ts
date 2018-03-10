import { Component, OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video'],
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  
  video: any;
  editTitle:boolean=false;
  private updateVideoEvent=new EventEmitter();
  private deleteVideoEvent=new EventEmitter();
  constructor(
    //private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.editTitle=false;
  }

  onTitleClick(){
    this.editTitle=true;
  }
  getUrl(){
    //this.sanitizer.bypassSecurityTrustResourceUrl(video.url)
  }
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }
}
