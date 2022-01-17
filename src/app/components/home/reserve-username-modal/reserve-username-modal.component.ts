import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reserve-username-modal',
  templateUrl: './reserve-username-modal.component.html',
  styleUrls: ['./reserve-username-modal.component.scss']
})
export class ReserveUsernameModalComponent implements OnInit {
  @Output() openWaitlistModal = new EventEmitter();
  @Input() isReserveUsernameModalHidden = true;
  @ViewChild('reserveUsernameModal') reserveUsernameModal: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.reserveUsernameModal.nativeElement) {
      this.isReserveUsernameModalHidden = !this.isReserveUsernameModalHidden;
    }
  }

  onClose() {
    this.isReserveUsernameModalHidden = !this.isReserveUsernameModalHidden;
  }

  onWaitlistModalOpen(e: any) {
    e.preventDefault();
    this.onClose();
    this.openWaitlistModal.emit();
  }
}
