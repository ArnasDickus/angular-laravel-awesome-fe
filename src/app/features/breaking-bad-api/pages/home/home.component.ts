import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Characters } from '@core/interfaces/breaking-bad-api/characters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public fetchedData: Characters[];
  public form: FormGroup;
  public isDataLoaded = false;

  constructor() {
  }

  public ngOnInit(): void {
  }
}

