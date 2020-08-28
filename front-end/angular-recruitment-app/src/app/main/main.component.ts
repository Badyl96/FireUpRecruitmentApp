import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  users: User;
  error: string;
  errorBlock = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    return this.userService.users().subscribe(dataUsers => {
      this.users = dataUsers
      console.log(this.users)
    }, err => {
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
  }
}
