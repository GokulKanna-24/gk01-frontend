import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import {CookieService} from 'ngx-cookie-service';
import { loginType } from './auth';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HxSpinnerService } from '../../_custom-hx/hx-spinner/hx-spinner.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgClass, ReactiveFormsModule,
    NzMessageModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  passwordShow: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(
    private msg: NzMessageService,
    private cookie: CookieService,
    private loginService: LoginService,
    private router: Router,
    private spinner: HxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, Validators.required)
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if(this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this.login(this.loginForm.value);
    } else {
      this.msg.warning('Make sure you fill out the form with valid credentials', {
        nzDuration: 10000
      });
    }
  }

  login(data: loginType) {
    this.spinner.show();
    this.loginService.login(data).subscribe((res: any) => {
      this.spinner.hide();
      if(res.success) {
        this.loginForm.reset();
        this.msg.success(res.message, {
          nzDuration: 10000
        });
        this.cookie.set('prauth', res.data.token);
        this.router.navigate(['/']);
      } else {
        this.msg.error(res.message, {
          nzDuration: 10000
        });
      }
    }, (err) => {
      this.spinner.hide();
      this.msg.warning(err.message, {
        nzDuration: 10000
      });
    });
  }
}
