import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

    constructor(private accountService: AccountService) {
    }

    ngOnInit() {
      this.user = this.accountService.userValue;
    }

}
