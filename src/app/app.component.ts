import { Component, OnInit } from '@angular/core';
import { StorageHelper } from './shared/storage.helper';
import { StorageKeys } from './shared/constant';
import { Router } from '@angular/router';
import { CacheService } from './shared/service/cache.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bhai-paisa-dega';
  isLoggedIn: boolean;

  constructor(private router: Router,
              private cacheService: CacheService) {

  }
  ngOnInit(): void {
    this.cacheService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });

    if (!this.isLoggedIn) {
      this.isLoggedIn = StorageHelper.getLocal(StorageKeys.IsLoggedIn) || false;
    }

    if (this.isLoggedIn) {
      this.cacheService.isLoggedIn.next(true);
    }
  }
}
