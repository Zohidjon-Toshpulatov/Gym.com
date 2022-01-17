import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vip-code-modal',
  templateUrl: './vip-code-modal.component.html',
  styleUrls: ['./vip-code-modal.component.scss']
})
export class VipCodeModalComponent implements OnInit {
  @Output() openWelcomeVipModal = new EventEmitter();
  @Input() isVipCodeHidden = true;
  @ViewChild('vipCodeModal') vipCodeModal: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.vipCodeModal.nativeElement) {
      this.isVipCodeHidden = !this.isVipCodeHidden;
    }
  }

  onClose() {
    this.isVipCodeHidden = !this.isVipCodeHidden;
  }

  onWelcomeVip() {
    this.onClose();
    this.openWelcomeVipModal.emit();
  }

}
