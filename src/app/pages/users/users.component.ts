import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Result } from 'src/app/shared/interface/user.interface';
import { UsersService } from '../../../../src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Output() totalUser = new EventEmitter<number>();
  totalListValue = 10;
  totalUsers = [
    { value: 10, viewValue: 'list of 10 users' },
    { value: 20, viewValue: 'list of 20 users' },
    { value: 30, viewValue: 'list of 30 users' },
    { value: 40, viewValue: 'list of 40 users' },
    { value: 50, viewValue: 'list of 50 users' },
  ];

  userList!: Result[];

  constructor(private userService: UsersService, private router: Router) {}

  public totalUsersSelected(e: MatSelectChange) {
    this.totalListValue = e.value;
    this.getUsers();
  }

  public userDetailsSelected(user: Result) {
    console.log(user);
    this.userService.updateUserDetails(user);
    this.router.navigate(['/details']);
  }

  public getUsers() {
    this.userService
      .getUsers(this.totalListValue, 'nuvalence')
      .subscribe((res) => {
        console.log(res.results);
        this.userList = res.results;
      });
  }
}
