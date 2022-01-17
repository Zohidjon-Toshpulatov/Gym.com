import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-waitlist-modal',
  templateUrl: './waitlist-modal.component.html',
  styleUrls: ['./waitlist-modal.component.scss']
})
export class WaitlistModalComponent implements OnInit {
  @Input() isWaitlistModalHidden = true;
  @ViewChild('waitlist') waitlistModal: any;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleModal(event: any) {
    if (event.target === this.waitlistModal.nativeElement) {
      this.isWaitlistModalHidden = !this.isWaitlistModalHidden;
    }
  }

  onClose() {
    this.isWaitlistModalHidden = !this.isWaitlistModalHidden;
  }

}
