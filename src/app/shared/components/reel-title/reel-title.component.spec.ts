import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelTitleComponent } from './reel-title.component';

describe('ReelTitleComponent', () => {
  let component: ReelTitleComponent;
  let fixture: ComponentFixture<ReelTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
