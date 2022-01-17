import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCodeModalComponent } from './vip-code-modal.component';

describe('VipCodeModalComponent', () => {
  let component: VipCodeModalComponent;
  let fixture: ComponentFixture<VipCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipCodeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
