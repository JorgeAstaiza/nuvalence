import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, Users } from '../interface/user.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  URL = `${environment.baseUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(results: number, seed = 'nuvalence'): Observable<Users> {
    return this.http.get<Users>(`${this.URL}?results=${results}&seed=${seed}`)
  }
}
