import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  error: string;
  errorBlock = false;
  constructor(private socialAuthService: SocialAuthService, private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {

  }

  signInWithFB() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
      localStorage.setItem('token', this.user.authToken);
      this.auth.login(this.user.authToken).subscribe(() => {
        this.router.navigateByUrl('/main-page');
      },
        err => {
          this.errorBlock = true;
          switch (err.status) {
            case 404:
              this.error = "Nie znaleziono";
              break;
            case 500:
              this.error = "Serwer nie odpowiada";
              break;
            case 401:
              this.error = "Brak autoryzacji";
              break;
          }
        });
    })

  }
}
