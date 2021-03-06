import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

  url: string = "https://localhost:44393/api/cliente";

  constructor(
    private http: HttpClient

  ) { }

  getClientes(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
