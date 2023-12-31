import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDetailsRoutingModule } from './users-details-routing.module';
import { UsersDetailsComponent } from './users-details.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';

@NgModule({
  declarations: [
    UsersDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersDetailsRoutingModule,
    UserInfoComponent
  ]
})
export class UsersDetailsModule { }
