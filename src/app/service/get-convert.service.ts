import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  export() {
    const data = {
      input: '55759bce-c395-416c-a981-9c13c6b35b2e',
      archive_multiple_files: false,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${environment.token}`,
      }),
    };
    return this.http.post(
      `https://api.cloudconvert.com/v2/export/url`,
      data,
      httpOptions
    );
  }
}
