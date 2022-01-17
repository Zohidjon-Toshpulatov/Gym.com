import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isClosed = true;
  isLoginHidden = true;
  isEmailLoginHidden = true;
  isVipCodeHidden = true;
  isWelcomeVipHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  onEmailLogin() {
    this.isEmailLoginHidden = !this.isEmailLoginHidden
  }

  onWelcomeVip() {
    this.isWelcomeVipHidden = !this.isWelcomeVipHidden;
  }

}
