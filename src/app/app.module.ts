import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoSelectedComponent } from './components/video-selected/video-selected.component';
import { reducers, metaReducers } from './store/reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoItemComponent,
    VideoSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
