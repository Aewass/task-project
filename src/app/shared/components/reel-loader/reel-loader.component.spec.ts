import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelLoaderComponent } from './reel-loader.component';

describe('ReelLoaderComponent', () => {
  let component: ReelLoaderComponent;
  let fixture: ComponentFixture<ReelLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReelLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReelLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
