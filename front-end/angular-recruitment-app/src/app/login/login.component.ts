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

  constructor(private socialAuthService: SocialAuthService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signInWithFB() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe(user => {
      this.auth.login(user.authToken).subscribe(() => {
        localStorage.setItem('authorizeToken', user.authToken);
        this.router.navigateByUrl('/main-page');
      },
        err => console.log(err));
    })

  }
}
