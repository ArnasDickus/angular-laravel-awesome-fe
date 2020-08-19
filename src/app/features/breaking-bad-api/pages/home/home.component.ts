import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakingBadApiService } from '@core/services/breaking-bad-api/breaking-bad-api.service';
import { Characters } from '@core/interfaces/breaking-bad-api/characters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public fetchedData: Characters[];
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private breakingBadApiService: BreakingBadApiService
  ) {

  }

  public ngOnInit(): void {
    this.buildForm();
    this.breakingBadApiService.fetchFormData().subscribe((task: Characters[]) => {
      this.fetchedData = task;
    });
  }

  public onChange(): void {
    console.log(this.form.value.search);
    if (this.form.value.search >= 3) {

      // this.characters.filter
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      search: ['', [
      ]],
    });
  }
}
