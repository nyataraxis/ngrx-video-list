import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoSelectedComponent } from './components/video-selected/video-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoItemComponent,
    VideoSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
