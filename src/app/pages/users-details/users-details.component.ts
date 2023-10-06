import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/shared/interface/user.interface';
import { UsersService } from '../../../../src/app/shared/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  userDetails?: Result;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.userDetails.subscribe((res) => {
      this.userDetails = res;
    });
  }
}
