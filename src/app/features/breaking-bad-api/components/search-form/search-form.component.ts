import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { searchByShowEnum } from '@core/enums/breaking-bad-api/searchbyshow.enum';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public breakingBadRadioValue = searchByShowEnum.BREAKINGBAD;
  public betterCallSaulRadioValue = searchByShowEnum.BETTERCALLSAUL;
  public crossoverValue = searchByShowEnum.CROSSOVER;
  public searchQuery = '';
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onChange(filters: any): void {
    this.searchEvent.emit(filters);
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      searchByName: [''],
      searchByNickname: [''],
      searchByShow: this.formBuilder.group( {
        breakingBad: [''],
        betterCallSaul: [''],
        crossover: ['']
      }),
    });
  }
}
