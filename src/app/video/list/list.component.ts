import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../../shared/video';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  inputs:['videos'],
  outputs:['selectVideo']
})
export class ListComponent implements OnInit {
  public videos:any;
  public selectVideo=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid:Video){
    this.selectVideo.emit(vid);
  }
}
