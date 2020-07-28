import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
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

  public fetchFormData(): Observable<TodoItems[]> {
    return this.http.get<TodoItems[]>(this.todoUrl);
  }

  public sendFormData(form): void {
    this.http.post(this.todoUrl, JSON.stringify(form), {headers: this.headers})
      .subscribe();
    this.fetchFormData();
  }

  public deleteTask(id): void {
    const todoUrlDelete = `http://127.0.0.1:8000/api/todo/${id}`;

    this.http.delete(todoUrlDelete, {headers: this.headers})
      .subscribe(
        (response) => {
          console.log('Success');
        },
      (error) => {
          console.error(error);
      }
      );
  }
}
