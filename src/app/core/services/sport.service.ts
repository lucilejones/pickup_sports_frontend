import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http:HttpClient) { }

  getSports() {
    return this.http.get(`${environment.apiUrl}/sports`)
  }
}
