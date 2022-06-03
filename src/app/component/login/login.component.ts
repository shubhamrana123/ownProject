import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { popupMessage } from 'src/app/shared/common-dialog';
import { pattern } from 'src/app/constant/pattern';
import { pathValue } from 'src/app/constant/routes';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pattern=pattern.password
  submitted = false;
  title ='Basic Information'
  loginForm = this.formbuilder.group({
    password: new FormControl('Miri@123', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern)]),
    user_email: new FormControl('ashwini.singh@miritech.com', [Validators.required, Validators.email])
  })
  constructor(private formbuilder: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  login() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginService.onLogin(this.loginForm?.value).subscribe((datas: any) => {
        if (datas?.statusCode != 204) {
          localStorage.setItem('Token', datas?.response?.accessToken)
          localStorage.setItem('userRole', datas?.response?.userData.user_role)
          this.router.navigate([pathValue.userRoute])
          this.userService.openDialog(popupMessage.data?.body?.loginData,popupMessage.data)
        }
        else
          this.userService.openDialog(popupMessage.invalid,'')
      })

    }
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }
  get accessToFormControl() {
    return this.loginForm.controls;
  }
}





