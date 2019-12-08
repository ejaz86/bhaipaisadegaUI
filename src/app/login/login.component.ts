import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CacheService } from '../shared/service/cache.service';
import { Router } from '@angular/router';
import { StorageHelper } from '../shared/storage.helper';
import { StorageKeys } from '../shared/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private cacheService: CacheService,
              private router: Router) {
  }

  submit() {
    if (this.form.valid) {
      this.cacheService.loginUser(this.form.value)
        .subscribe(response => {
          if (response) {
            this.cacheService.userDetail = response;
            this.cacheService.isLoggedIn.next(true);
            StorageHelper.setLocal(StorageKeys.IsLoggedIn, true);
            StorageHelper.setLocal(StorageKeys.UserDetail, response);
            this.router.navigate(['home']);
          }
        });
    }
  }
}
