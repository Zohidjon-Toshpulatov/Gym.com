import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailLoginModalComponent } from './email-login-modal.component';

describe('EmailLoginModalComponent', () => {
  let component: EmailLoginModalComponent;
  let fixture: ComponentFixture<EmailLoginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailLoginModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
