import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient: HttpClient) { }

  get(url: any) {
    console.log(environment.backendUrl + url);

    return this.httpclient.get(environment.backendUrl + url);
  }
  post(endpoint: string, data: any) {
    console.log(environment.backendUrl + endpoint, data);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.httpclient.post(environment.backendUrl + endpoint, data, { headers: headers });
  }
}
