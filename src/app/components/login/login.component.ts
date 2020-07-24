import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { AuthMaker, TokenInterface } from './../../interfaces/auth';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public auth: AuthMaker = AuthMaker.create();
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.auth).subscribe(
      (response: TokenInterface) => {
        this.authService.create(response);
        this.userService.getAndSetStorage();
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
