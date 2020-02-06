import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  data: any;
  // tslint:disable-next-line:variable-name
  _url = 'https://brl-register.herokuapp.com/api/brl/register/candidate';
  // tslint:disable-next-line:variable-name
  constructor(private  _http: HttpClient) { }
  postenrollment(data) {
   return  this._http.post(this._url, data);
  }
}

