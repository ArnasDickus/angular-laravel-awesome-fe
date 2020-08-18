import { Component, OnInit } from '@angular/core';
import { AllRoutes } from '../../enums/allroutes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public todoRoute = `${AllRoutes.ADMIN}/${AllRoutes.TODO}`;
  public registerRoute = AllRoutes.REGISTER;
  public loginRoute = AllRoutes.LOGIN;

  constructor() { }

  ngOnInit(): void {
  }

}