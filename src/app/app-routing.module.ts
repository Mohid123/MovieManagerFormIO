import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./playlist/playlist.module').then(m => m.PlaylistModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
