import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GetConvertService {
  constructor(private http: HttpClient) {}

  getConvertType() {
    return this.http.get('https://api.cloudconvert.com/v1/inputformats');
  }

  convert(data) {
    return this.http.post(`${environment.serverURL}/convert`, data);
  }
}
