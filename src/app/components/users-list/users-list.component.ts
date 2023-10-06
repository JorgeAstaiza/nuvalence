import { AfterViewInit, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import { UsersService } from 'src/app/shared/services/users.service';
import { Result } from 'src/app/shared/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnChanges, OnInit {

  @Input() users!: Result[];
  @Output() userDetailsSelected = new EventEmitter<Result>();
  @Output() getUsers = new EventEmitter<boolean>();


  displayedColumns: string[] = ['photo', 'name', 'location', 'age', 'cell', 'action'];
  userList!: Result[];
  dataSource = new MatTableDataSource<Result>(this.userList);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getUsers.emit(true);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['users'].currentValue);
    this.userList = changes['users'].currentValue
    this.dataSource = new MatTableDataSource<Result>(this.userList);
    this.dataSource.paginator = this.paginator;
  }

  userDetails(user: Result) {
    this.userDetailsSelected.emit(user);
  }
}
