import {Component, OnInit} from '@angular/core';
import { CacheService } from '../shared/service/cache.service';
import { StorageHelper } from '../shared/storage.helper';
import { Router } from '@angular/router';
import {StorageKeys} from '../shared/constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  userList: any[] = [];
  constructor(private cacheService: CacheService,
              private router: Router) { }

  ngOnInit() {
    this.user = (this.cacheService.userDetail) ? this.cacheService.userDetail
      : StorageHelper.getLocal(StorageKeys.UserDetail);
    this.getAllUserList();
  }

  clickHandler() {
    StorageHelper.clear();
    this.cacheService.isLoggedIn.next(false);
    this.router.navigate(['login']);
  }

  private getAllUserList() {
    this.cacheService.getUserList().subscribe(response => {
      if (response) {
        this.userList = response;
      }
    });
  }



}
