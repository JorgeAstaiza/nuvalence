import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Output() totalUser = new EventEmitter<number>()
  totalListValue = 10;
  totalUsers = [
    { value: 10, viewValue: 'list of 10 users'},
    { value: 20, viewValue: 'list of 20 users'},
    { value: 30, viewValue: 'list of 30 users'},
    { value: 40, viewValue: 'list of 40 users'},
    { value: 50, viewValue: 'list of 50 users'},
  ]

  public totalUsersSelected(e: MatSelectChange) {
    this.totalListValue = e.value
  }
}
