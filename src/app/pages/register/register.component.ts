import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: any;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {

  }

  public ngOnInit(): void {
    this.buildRegisterForm();
  }

  public saveForm(): void {
    this.authenticationService.getRegisterFormData(this.form.value);
  }

  private buildRegisterForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      repeatPassword: ['', Validators.required]
    });
  }
}