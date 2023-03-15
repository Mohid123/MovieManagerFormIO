import { Component } from '@angular/core';
import { FormioResourceComponent } from '@formio/angular/resource';

@Component({
  selector: 'app-playlist',
  template: `
  <ul class="nav nav-tabs" style="margin-bottom: 10px;">
    <li class="nav-item"><a class="nav-link" routerLink="../"><i class="bi-chevron-left"></i></a></li>
    <li class="nav-item"><a class="nav-link" routerLink="view" routerLinkActive="active">View</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="movies" routerLinkActive="active">Movies</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="edit" routerLinkActive="active">Edit</a></li>
    <li class="nav-item"><a class="nav-link" routerLink="delete" routerLinkActive="active"><span class="bi-trash"></span></a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class PlayListComponent extends FormioResourceComponent {

}