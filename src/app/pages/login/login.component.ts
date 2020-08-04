import { Component, OnInit } from '@angular/core';
import {AllRoutes} from '../../core/enums/allroutes.enum';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: any;
  public forgotPasswordRoute = `../${AllRoutes.FORGOTPASSWORD}`;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
  }

  public ngOnInit(): void {
    this.buildLoginForm();
  }

  public redirectToRegister(): void {
    this.router.navigate([`/${AllRoutes.REGISTER}`]);
  }

  public saveForm(): void {
    this.authenticationService.getLoginFormData(this.form.value);
  }

  private buildLoginForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
