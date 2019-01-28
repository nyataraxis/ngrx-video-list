import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  @Input() auth: boolean;
  constructor() {}
  @Output() login = new EventEmitter();
  @Output() logout = new EventEmitter();


  clickLogoutButton() {
    this.logout.emit();
    console.log(this.auth);
  }
  clickLoginButton() {
    this.login.emit();
    console.log(this.auth);
  }
  ngOnInit() {}
}
