import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  inputs:['video'],
  outputs:['updateVideoEvent','deleteVideoEvent']
})
export class DetailComponent implements OnInit {

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
