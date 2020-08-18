import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormService } from '@core/services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-laravel-awesome-fe';

  constructor(
    private formService: FormService
  ) {
  }


  public onSubmit(form: NgForm): void {
    console.log(form.value);
    this.formService.sendData(form);
  }
}
