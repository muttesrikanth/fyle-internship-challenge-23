import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { NgxPaginationModule, PaginatePipe, PaginationService } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxPaginationModule, FormsModule, ReactiveFormsModule],
      declarations: [ReposComponent,PaginatePipe],
      providers: [PaginationService],
    });
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
