import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelRatingComponent } from './reel-rating.component';

describe('ReelRatingComponent', () => {
  let component: ReelRatingComponent;
  let fixture: ComponentFixture<ReelRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
