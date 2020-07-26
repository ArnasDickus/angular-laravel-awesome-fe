import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public receiveFormData(form): void {
    this.sendFormData(form).then(() => {});
  }

  private sendFormData(form): Promise<any> {
    console.log(form);
    return this.http.post('http://127.0.0.1:8000/api/todo', JSON.stringify(form), {headers: this.headers})
      .toPromise()
      .then(res => res || []);
  }
}
