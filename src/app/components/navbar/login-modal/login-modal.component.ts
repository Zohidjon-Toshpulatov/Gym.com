import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Output() openEmailLogin = new EventEmitter();
  @ViewChild('loginModal') loginModal: any;
  @Input() isLoginHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.loginModal.nativeElement) {
      this.isLoginHidden = !this.isLoginHidden;
    }
  }

  onClose() {
    this.isLoginHidden = !this.isLoginHidden;
  }

  onEmailLogin() {
    this.onClose();
    this.openEmailLogin.emit();
  }

}
