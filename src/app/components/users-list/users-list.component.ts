import { AfterViewInit, Component, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { UsersService } from 'src/app/shared/services/users.service';
import { Result } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [UsersService]
})
export class UsersListComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() totalUsers!: number;

  displayedColumns: string[] = ['photo', 'name', 'location', 'age', 'cell'];
  userList!: Result[];
  dataSource = new MatTableDataSource<Result>(this.userList);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private userServices: UsersService) {

  }

  ngOnInit(): void {
    // this.getUsers();  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['totalUsers'].currentValue);
    this.getUsers()
  }

  private getUsers() {
    this.userServices.getUsers(this.totalUsers, 'nuvalence').subscribe(res => {
      console.log(res.results);
      this.userList = res.results;
      this.dataSource = new MatTableDataSource<Result>(this.userList);

    })
  }
}
