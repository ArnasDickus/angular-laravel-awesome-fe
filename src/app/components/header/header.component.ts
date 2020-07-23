import { Component, OnInit } from '@angular/core';
import { AllRoutes } from '../../core/enums/allroutes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public todoRoute = AllRoutes.TODO;

  constructor() { }

  ngOnInit(): void {
  }

}
