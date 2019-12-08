import { Component, OnInit } from '@angular/core';
import {CacheService} from '../shared/service/cache.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  processData: any;
  constructor(private cacheService: CacheService,
              private router: Router) { }

  ngOnInit() {
    this.processData = this.cacheService.processData;
  }

  process() {
    this.cacheService.lendMoney(this.processData).subscribe(resp => {
      if (resp) {
        this.router.navigate(['home']);
      }
    });
  }



}
