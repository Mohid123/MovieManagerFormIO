import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from '@formio/angular/resource';

const movieRoutes: Routes = FormioResourceRoutes();
movieRoutes[2].children.push({
  path: 'movies',
  loadChildren: () => import('../movie/movie.module').then(m => m.MovieModule)
});

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(movieRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'playlist',
      form: 'playlist',
      view: './playlist.html'
    }}
  ]
})
export class PlaylistModule { }
