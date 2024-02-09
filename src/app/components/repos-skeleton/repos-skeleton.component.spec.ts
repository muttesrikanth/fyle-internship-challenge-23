import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoCardSkeletonComponent } from '../repo-card-skeleton/repo-card-skeleton.component';

import { ReposSkeletonComponent } from './repos-skeleton.component';

describe('ReposSkeletonComponent', () => {
  let component: ReposSkeletonComponent;
  let fixture: ComponentFixture<ReposSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposSkeletonComponent, RepoCardSkeletonComponent]
    });
    fixture = TestBed.createComponent(ReposSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
