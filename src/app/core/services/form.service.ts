import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient){}
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  public sendData(form: NgForm): Promise <any>{
    console.log(form.value);
    return this.http.post('http://127.0.0.1:8000/api/items', JSON.stringify(form.value), {headers: this.headers})
      .toPromise()
      .then(res => res || [])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
