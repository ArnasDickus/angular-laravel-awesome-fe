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



    // if (this.form.value.searchByName.length >= 3) {
    //   this.searchQuery = this.form.value.search;
    //   this.fetchData();
    // }
    //
    // if (this.form.value.searchByNickname.length >= 3) {
    //   console.log('nickname');
    // }
    //
    // if (this.form.value.searchByName.length === 0) {
    //   this.searchQuery = '';
    //   this.fetchData();
    // }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      searchByName: [''],
      searchByNickname: [''],

    });
  }

  private fetchData(): void {
    this.isDataLoaded = false;
    this.breakingBadApiService.fetchByName(this.searchQuery).subscribe((task: Characters[]) => {
      if (task) {
        this.isDataLoaded = true;
        this.fetchedData = task;
      }
    });
  }
}

