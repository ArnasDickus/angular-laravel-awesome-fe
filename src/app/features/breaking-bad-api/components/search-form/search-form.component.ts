import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakingBadApiService } from '@core/services/breaking-bad-api/breaking-bad-api.service';
import { Characters } from '@core/interfaces/breaking-bad-api/characters';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  // @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  // @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchEvent = new EventEmitter<string>();
  public searchQuery = '';
  public form: FormGroup;
  public isDataLoaded: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }



  public onChange(filters: any): void {
    // TODO Every time there is a change. I need to get this.form.value
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
}
