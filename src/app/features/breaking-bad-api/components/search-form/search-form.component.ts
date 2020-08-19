import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakingBadApiService } from '@core/services/breaking-bad-api/breaking-bad-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  public form: FormGroup;
  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  public searchQuery = '';

  constructor(
    private formBuilder: FormBuilder,
    private breakingBadApiService: BreakingBadApiService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onChange(): void {
    console.log('change');

    // TODO Every time there is a change. I need to get this.form.value
    console.log(this.form.value);
    // Create search: It should contain:
    // 1) Search by Name.
    // 2) Search by Nickname
    // 3) Radio buttons. Display only breaking bad characters, only better call saul characters. Display both characters
    // 4) Display characters who was in both breaking bad and better call saul.
    // 4) Dropdown for all occupations. Clicking on it will display users who have that occupation.
    // 5) Radio button show all dead characters, show all alive characters, show all.
    // 6) Multiple search is valid. For example Click display only alive characters, and search by name.
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      searchByName: [''],
      searchByNickname: [''],

    });
  }

  private search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }

  // private fetchData(): void {
  //   this.isDataLoaded = false;
  //   this.breakingBadApiService.fetchByName(this.searchQuery).subscribe((task: Characters[]) => {
  //     if (task) {
  //       this.isDataLoaded = true;
  //       this.fetchedData = task;
  //     }
  //   });
  // }

}
