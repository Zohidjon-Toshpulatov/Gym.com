import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome-vip-modal',
  templateUrl: './welcome-vip-modal.component.html',
  styleUrls: ['./welcome-vip-modal.component.scss']
})
export class WelcomeVipModalComponent implements OnInit {
  @Input() isWelcomeVipHidden = true;
  @ViewChild('welcomeVipModal') welcomeVipModal: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.welcomeVipModal.nativeElement) {
      this.isWelcomeVipHidden = !this.isWelcomeVipHidden;
    }
  }

  onClose() {
    this.isWelcomeVipHidden = !this.isWelcomeVipHidden;
  }

}
