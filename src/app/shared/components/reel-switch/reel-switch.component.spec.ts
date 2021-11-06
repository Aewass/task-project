import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelSwitchComponent } from './reel-switch.component';

describe('ReelSwitchComponent', () => {
  let component: ReelSwitchComponent;
  let fixture: ComponentFixture<ReelSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
