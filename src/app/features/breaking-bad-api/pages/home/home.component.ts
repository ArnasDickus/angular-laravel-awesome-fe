import { Component, OnInit } from '@angular/core';
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
  public searchQuery = '';
  public isDataLoaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private breakingBadApiService: BreakingBadApiService
  ) {

  }

  public ngOnInit(): void {
    this.buildForm();
    this.fetchData();
  }

  public onChange(): void {
    if (this.form.value.search.length >= 3) {
      this.searchQuery = this.form.value.search;
      this.fetchData();
    }

    if (this.form.value.search.length === 0) {
      this.searchQuery = '';
      this.fetchData();
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      search: ['', [
      ]],
    });
  }

  private fetchData(): void {
    this.isDataLoaded = false;
    this.breakingBadApiService.fetchFormData(this.searchQuery).subscribe((task: Characters[]) => {
      if (task) {
        this.isDataLoaded = true;
        this.fetchedData = task;
      }
    });
  }
}

