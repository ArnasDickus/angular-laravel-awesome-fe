import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService  } from '../../../../core/services/authentication/authentication.service';
import { MatchPasswords } from '../../../../core/validators/match-passwords';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: any;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private matchPasswords: MatchPasswords
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
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
      repeatPassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]],
    }, {validators: [this.matchPasswords.validate]});
  }


}
