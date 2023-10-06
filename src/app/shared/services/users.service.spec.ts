import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { mockUsers } from './mock.users';

describe('UsersService', () => {
  let service: UsersService;
  let httpMockUsers: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    httpMockUsers = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMockUsers.verify();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should get a list with 5 users', (done) => {
    service.getUsers(5).subscribe((users) => {
      expect(users).toEqual(mockUsers);
      done();
    });

    const req = httpMockUsers.expectOne(
      'https://randomuser.me/api?results=5&seed=nuvalence'
    );

    req.flush(mockUsers);
  });
});
