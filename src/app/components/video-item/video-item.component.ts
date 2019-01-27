import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../../models';

@Component({
  selector: 'app-video-item',
  template: `<li (click)="select.emit(video.id)">{{video.name}}</li>`,
  styles: []
})

export class VideoItemComponent implements OnInit {

  @Input() video: Video;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
