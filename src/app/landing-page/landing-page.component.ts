import {Component, OnInit} from '@angular/core';
import {StorageHelper} from '../shared/storage.helper';
import {CacheService} from '../shared/service/cache.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit{

  constructor(private cacheService: CacheService) {
  }

  ngOnInit(): void {
    StorageHelper.clear();
    this.cacheService.isLoggedIn.next(false);
  }
}
