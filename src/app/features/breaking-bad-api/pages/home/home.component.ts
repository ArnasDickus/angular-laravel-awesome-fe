import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Characters } from '@core/interfaces/breaking-bad-api/characters';
import { BreakingBadApiService } from '@core/services/breaking-bad-api/breaking-bad-api.service';
import { SearchFormComponent } from '@features/breaking-bad-api/components/search-form/search-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @Input() public fetchedData: Characters[];
  // @Input() public searchQuery: string;
  // https://github.com/haykoyaghubyan/angular-data-filters/blob/master/src/app/pipe/filter.pipe.ts
  public form: FormGroup;
  public searchQuery: string;
  public isDataLoaded = false;

  constructor(
    private breakingBadApiService: BreakingBadApiService
  ) {
  }

  public ngOnInit(): void {
    this.fetchData();
    setTimeout(() => {
      // console.log(this.fetchedData);
    }, 2000);
  }

  // public ngAfterViewInit(): void {
  //   this.searchQuery = this.child.searchQuery;
  //   console.log(this.searchQuery);
  //   this.fetchData();
  // }

  private fetchData(): void {
    this.isDataLoaded = false;
    this.breakingBadApiService.fetchByName(this.searchQuery).subscribe((task: Characters[]) => {
      if (task) {
        this.isDataLoaded = true;
        this.fetchedData = task;
        console.log(this.fetchedData);
      }
    });
  }
}

