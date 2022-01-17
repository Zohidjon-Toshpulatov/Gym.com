import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveUsernameModalComponent } from './reserve-username-modal.component';

describe('ReserveUsernameModalComponent', () => {
  let component: ReserveUsernameModalComponent;
  let fixture: ComponentFixture<ReserveUsernameModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveUsernameModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveUsernameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
