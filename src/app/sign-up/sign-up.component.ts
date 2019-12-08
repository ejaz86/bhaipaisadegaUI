import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CacheService} from '../shared/service/cache.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../login/login.component.scss']
})
export class SignUpComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private cacheService: CacheService,
              private router: Router) {
  }

  submit() {
    if (this.form.valid) {
      this.cacheService.registerUser(this.form.value).subscribe(
        response => {
          if (response) {
            this.router.navigate(['login']);
          }
        }
      );
    }
  }

}
