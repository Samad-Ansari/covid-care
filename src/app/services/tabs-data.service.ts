import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabsDataService {

  constructor(private http: HttpClient) { }
  API_URL = environment.api_url;

  tabsCoronaData() : Observable<any> {
  	return this.http.get(this.API_URL)
  }
}
