import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../../../../src/app/shared/services/users.service';
import { mockUsers } from '../../../../src/app/shared/services/mock.users';
import { MatSelectChange } from '@angular/material/select';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let compiled: HTMLElement;
  let userService: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should do match with snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  test('should get users', () => {
    userService.getUsers(5, 'nuvalence').subscribe(() => {
      const req = httpMock.expectOne(
        'https://randomuser.me/api?results=5&seed=nuvalence'
      );
      expect(req.request.method).toBe('GET');

      // Completa la solicitud simulando una respuesta exitosa
      req.flush(mockUsers);

      // Verifica que userList se haya actualizado correctamente
      expect(component.userList).toEqual(mockUsers.results);
    });
  });

  it('should handle totalUsersSelected event', () => {
    const getUsersSpy = jest.spyOn(component, 'getUsers');
    // Simula el evento de selección de usuarios
    const event = { value: '10' } as MatSelectChange;
    component.totalUsersSelected(event);
    expect(component.totalListValue).toBe('10');
    expect(getUsersSpy).toHaveBeenCalled();
  });
});
