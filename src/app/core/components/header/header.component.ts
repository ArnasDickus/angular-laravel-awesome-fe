import { Component, OnInit } from '@angular/core';
import { AllRoutes } from '../../enums/allroutes.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public todoRoute = AllRoutes.TODO;
  public breakingBadAPI = AllRoutes.BREAKINGBADAPI;
  public registerRoute = `${AllRoutes.AUTH}/${AllRoutes.REGISTER}`;
  public loginRoute = `${AllRoutes.AUTH}/${AllRoutes.LOGIN}`;

  constructor() { }

  ngOnInit(): void {
  }

}
