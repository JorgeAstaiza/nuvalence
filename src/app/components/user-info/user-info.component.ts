import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from 'src/app/shared/interface/user.interface';

import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnChanges {
  @Input() userDetails?: Result;
  user?: Result;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userDetails'].currentValue.name) {
      this.user = changes['userDetails'].currentValue;
    }
  }
}
