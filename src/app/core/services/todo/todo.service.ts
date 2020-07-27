import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TodoItems } from '../../interfaces/todo-items';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private todoUrl = 'http://127.0.0.1:8000/api/todo';

  constructor(private http: HttpClient) {
    this.fetchFormData();
  }

  public receiveFormData(form): void {
    this.sendFormData(form);
    this.fetchFormData();
  }

  public fetchFormData(): Observable<TodoItems[]> {
    return this.http.get<TodoItems[]>(this.todoUrl);
  }

  private sendFormData(form): void {
    this.http.post(this.todoUrl, JSON.stringify(form), {headers: this.headers})
      .subscribe();
  }
}
