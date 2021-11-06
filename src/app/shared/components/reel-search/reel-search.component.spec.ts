import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelSearchComponent } from './reel-search.component';

describe('ReelSearchComponent', () => {
  let component: ReelSearchComponent;
  let fixture: ComponentFixture<ReelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
