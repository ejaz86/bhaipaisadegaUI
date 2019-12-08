import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../shared/service/cache.service';
import {StorageHelper} from '../shared/storage.helper';
import {StorageKeys} from '../shared/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userData: any;
  user: any;
  public pieChartLabels: string[] = ['Total Lend Amount', 'Total Profit', 'Total Loan Amount'];
  public pieChartData: number[] = [500, 100, 250];
  public pieChartType = 'pie';
  pieColors = [
    {
      'backgroundColor': [
        'rgba(63,81,181,0.6)',
        'rgba(233,30,99,0.6)',
        'rgba(156,39,176,0.6)'
      ],
      'borderColor': [
        '#fff',
        '#fff',
        '#fff',
      ],
      'pointBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ],
      'pointBorderColor': [
        '#fff',
        '#fff',
        '#fff'
      ],
      'pointHoverBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ],
      'pointHoverBorderColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ]
    }
  ];

  constructor(private router: Router,
              private cacheService: CacheService) { }

  ngOnInit() {
    this.user = (this.cacheService.userDetail) ? this.cacheService.userDetail
      : StorageHelper.getLocal(StorageKeys.UserDetail);

   this.getDashboardData();
  }

  clickHandler(value: string) {
    this.router.navigate(['detail'], {queryParams: {type: value}});
  }

  getDashboardData() {
    this.cacheService.getDashboardData(this.user).subscribe(response => {
      if (response) {
        this.userData = response;
      }
    });
  }

}
