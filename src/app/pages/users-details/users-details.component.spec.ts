import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsersDetailsComponent } from './users-details.component';
import { UsersService } from '../../../../src/app/shared/services/users.service';

describe('UsersDetailsComponent', () => {
  let component: UsersDetailsComponent;
  let fixture: ComponentFixture<UsersDetailsComponent>;
  let userService: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
