import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public getLoginFormData(data): void {
    console.log(data);
  }
}
