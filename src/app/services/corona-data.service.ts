import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoronaDataService {

  API_URL = environment.api_url; 

  constructor(private http:HttpClient) { }

  datatable() : Observable<any> {
   return this.http.get(this.API_URL)
  }


}
