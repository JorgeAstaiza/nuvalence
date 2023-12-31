import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from 'src/app/components/users-list/users-list.component';

//Angular material
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersListComponent,
    MatSelectModule
  ],
})
export class UsersModule { }
