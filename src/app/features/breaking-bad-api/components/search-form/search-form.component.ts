import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Options } from '@core/interfaces/options';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @Input() filteredOccupationsOptions: Options[];

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
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      searchByName: [''],
      searchByNickname: [''],
      searchByShow: this.formBuilder.group( {
        breakingBad: '',
        betterCallSaul: ''
      }),
      searchByRIP: this.formBuilder.group( {
        alive: '',
        deceased: '',
        unknown: '',
      }),
      searchByOccupation: '',
    });
  }
}
