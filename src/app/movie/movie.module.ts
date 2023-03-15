import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from '@formio/angular/resource';
import { MovieComponent } from './movie.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      view: MovieComponent
    }))
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'movie',
      form: 'movie',
      parents: [
        'playlist',
        {
          field: 'title',
          resource: 'Playlist',
          filter: true
        }
      ]
    }}
  ]
})
export class MovieModule { }
