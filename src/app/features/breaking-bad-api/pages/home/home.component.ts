import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Characters } from '@core/interfaces/breaking-bad-api/characters';
import { BreakingBadApiService } from '@core/services/breaking-bad-api/breaking-bad-api.service';
import { SearchFormComponent } from '@features/breaking-bad-api/components/search-form/search-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // TODO Docs https://github.com/haykoyaghubyan/angular-data-filters/blob/master/src/app/pipe/filter.pipe.ts
  @Input() public filteredData: Characters[];
  public fetchedData: Characters[];
  public form: FormGroup;
  public searchByName: string;
  public isDataLoaded = false;

  constructor(
    private breakingBadApiService: BreakingBadApiService
  ) {
  }

  public ngOnInit(): void {
    this.fetchData();
  }

  public getSearchData(data): void {
    this.searchByName = data.searchByName;
    this.fetchData();
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

  private fetchData(): void {
    this.isDataLoaded = false;
    this.breakingBadApiService.fetchAllCharacters().subscribe((task: Characters[]) => {
      if (task) {
        this.isDataLoaded = true;
        this.fetchedData = task;
      }
    });
  }
}

