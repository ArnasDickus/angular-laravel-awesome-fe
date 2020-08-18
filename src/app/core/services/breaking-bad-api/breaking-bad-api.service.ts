import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadApiService {
  private url = 'https://www.breakingbadapi.com/api/';

  constructor(
    private http: HttpClient
  ) {
    this.fetchFormData();
  }
  public fetchFormData(): any {
    return this.http.get(this.url);
  }
}
