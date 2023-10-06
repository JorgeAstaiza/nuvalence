import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Users } from '../interface/user.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL = `${environment.baseUrl}`;
  userDetails = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  getUsers(results: number, seed = 'nuvalence'): Observable<Users> {
    return this.http.get<Users>(`${this.URL}?results=${results}&seed=${seed}`);
  }

  updateUserDetails(user: Result) {
    this.userDetails.next(user);
  }
}
