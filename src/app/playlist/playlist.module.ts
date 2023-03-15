import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from '@formio/angular/resource';
import { PlayListComponent } from './playlist.component';

const movieRoutes: Routes = FormioResourceRoutes({
  resource: PlayListComponent
});
movieRoutes[2].children.push({
  path: 'movies',
  loadChildren: () => import('../movie/movie.module').then(m => m.MovieModule)
});

@NgModule({
  declarations: [PlayListComponent],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(movieRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'playlist',
      form: 'playlist'
    }}
  ]
})
export class PlaylistModule { }
