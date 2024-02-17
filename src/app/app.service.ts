import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from './Models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'https://www.googleapis.com/books/v1';

  obtenerRespuesta(){
    return this._http.get<Answer>(this.apiUrl);
  }
}
