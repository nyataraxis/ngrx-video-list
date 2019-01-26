import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../../models/videos';

@Component({
  selector: 'app-video-list',
  template: `
    <div class="list">
      <h2>{{label}}</h2>
      <app-video-item *ngFor="let video of videos"
      [video]="video"
      (select)="select.emit($event)">
      </app-video-item>
    </div>
  `,
  styles: [`
  .list {
    display: flex;
    flex-direction: column;
  }`]
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Input() label: string;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
