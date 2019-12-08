import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CacheService} from '../shared/service/cache.service';
import {Router} from '@angular/router';
import {StorageHelper} from '../shared/storage.helper';
import {StorageKeys} from '../shared/constant';

@Component({
  selector: 'app-provide-loan',
  templateUrl: './provide-loan.component.html',
  styleUrls: ['./provide-loan.component.scss', '../login/login.component.scss']
})
export class ProvideLoanComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userId: new FormControl(''),
    amount: new FormControl(''),
    interestRate: new FormControl(''),
    tenure: new FormControl(''),
    paymentChannel: new FormControl('')
});
  userDetails: any;
  userList: any[] = [];
  paymentChannel: string[] = ['PAYTM', 'G-PAY'];

  constructor(private cacheService: CacheService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userDetails = (this.cacheService.userDetail) ? this.cacheService.userDetail
      : StorageHelper.getLocal(StorageKeys.UserDetail);
    this.getAllUserList();
  }

  processLoan() {
    if (this.form.valid) {
      let data = this.form.value;
      data.lendUserId = this.cacheService.userDetail.userId;
      this.cacheService.processData = data;
      this.router.navigate(['payment']);
    }
  }

  private getAllUserList() {
    this.cacheService.getUserList().subscribe(response => {
      if (response) {
        this.userList = response;
      }
    });
  }

}
