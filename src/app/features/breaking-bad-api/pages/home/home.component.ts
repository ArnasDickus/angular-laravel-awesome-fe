import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onChange(): void {
    console.log(this.form.value.search);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      search: ['', [
      ]],
    });
  }
}
