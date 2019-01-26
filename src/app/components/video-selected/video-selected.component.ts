import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/videos';

@Component({
  selector: 'app-video-selected',
  template: `
    <div *ngIf="video.name">
      <h1>{{video.name}}</h1>
      <p>{{video.description}}</p>
      <img src="{{video.img}}" alt="video poster">
    </div>
  `,
  styles: []
})
export class VideoSelectedComponent implements OnInit {
  @Input() video: Video;
  constructor() { }

  ngOnInit() {
  }

}
