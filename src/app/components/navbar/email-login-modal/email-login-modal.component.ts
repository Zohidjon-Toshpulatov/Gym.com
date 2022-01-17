import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-login-modal',
  templateUrl: './email-login-modal.component.html',
  styleUrls: ['./email-login-modal.component.scss']
})
export class EmailLoginModalComponent implements OnInit {
  @ViewChild('emailLoginModal') emailLoginModal: any;
  @Input() isEmailLoginHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.emailLoginModal.nativeElement) {
      console.log(event)
      this.isEmailLoginHidden = !this.isEmailLoginHidden;
    }
    console.log(event)
    console.log(this.emailLoginModal);
  }

  onClose() {
    this.isEmailLoginHidden = !this.isEmailLoginHidden;
  }

}
