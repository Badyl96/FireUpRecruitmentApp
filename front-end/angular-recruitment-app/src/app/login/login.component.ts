import { Component, OnInit } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import * as config from '../config/url'
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
          this.error = config.statusCode(err.status);
        });
    })

  }
}
