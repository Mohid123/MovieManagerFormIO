import { Component } from '@angular/core';
import { FormioResourceViewComponent } from '@formio/angular/resource';

@Component({
  selector: 'app-movie',
  template: `
  <div class="row">
    <div class="col-sm-8 py-5">
      <div class="d-flex flex-column text-left">
        <span>Movie Title: &nbsp; <span class="text-primary font-weight-bold">{{service?.resource?.data?.title}}</span></span>
        <br>
        <span>Playlist:&nbsp; <span class="text-primary font-weight-bold">{{service?.resource?.data?.playlist?.data?.title}}</span></span>
        <br>
        <span>Watch Now:&nbsp; <a class="text-primary font-weight-bold" [href]="service?.resource?.data?.youtubeUrlForVideo" target="_blank">{{service?.resource?.data?.youtubeUrlForVideo}}</a></span>
        <br>
        <img width="600" height="450" [src]="'https://img.youtube.com/vi/'+service?.resource?.data?.youtubeId+'/0.jpg'" [alt]="service?.resource?.data?.title" loading="lazy">
      </div>
    </div>
  </div>
  `
})
export class MovieComponent extends FormioResourceViewComponent {

}