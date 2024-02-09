import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSkeletonComponent } from './header-skeleton.component';

describe('HeaderSkeletonComponent', () => {
  let component: HeaderSkeletonComponent;
  let fixture: ComponentFixture<HeaderSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSkeletonComponent]
    });
    fixture = TestBed.createComponent(HeaderSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an animated pulse effect', () => {
    const pulseDiv = fixture.nativeElement.querySelector('.animate-pulse');
    expect(pulseDiv).toBeTruthy();
  });
});
