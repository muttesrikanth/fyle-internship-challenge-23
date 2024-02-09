import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch user data', () => {
    const testData = {
      login: 'testuser',
      id: 1,
      // Add other properties as needed
    };

    service.getUser('testuser').subscribe((data: any) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('https://api.github.com/users/testuser');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should fetch user repos', () => {
    const testData = [
      { id: 1, name: 'repo1' },
      { id: 2, name: 'repo2' },
      // Add other repos as needed
    ];

    service.getRepos('testuser').subscribe((data: any) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('https://api.github.com/users/testuser/repos');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });
});
