import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FormioAuthService } from '@formio/angular/auth';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moviemanager';
  public navigateToMovies: string;
  public currentUrl: string
  constructor(
    public auth: FormioAuthService,
    private router: Router,
    private actvatedRoute: ActivatedRoute
    // private http: HttpClient
  ) {
    this.auth.onLogin.subscribe(() => {
      // let headers: HttpHeaders = new HttpHeaders();
      // headers.append('x-jwt-token', localStorage.getItem("formioToken"));
      this.router.navigate(['/playlists'])
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(val => {
      this.navigateToMovies = val['url'].slice(0, -5).trim();
      this.navigateToMovies = this.navigateToMovies.trim();
      this.currentUrl = this.router.url;
    })
    
  }

  checkUrl(url: string) {
    return url?.includes('view') && url?.includes('playlists')
  }

  gotoMovies() {
    this.router.navigateByUrl(`${this.navigateToMovies}/movies`)
  }
}
