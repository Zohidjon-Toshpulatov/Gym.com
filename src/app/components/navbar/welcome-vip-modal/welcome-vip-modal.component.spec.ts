import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeVipModalComponent } from './welcome-vip-modal.component';

describe('WelcomeVipModalComponent', () => {
  let component: WelcomeVipModalComponent;
  let fixture: ComponentFixture<WelcomeVipModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeVipModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeVipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
