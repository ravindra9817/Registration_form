import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // tslint:disable-next-line:variable-name
  _url = 'https://brl-register.herokuapp.com/api/brl/register/candidate';
  // tslint:disable-next-line:variable-name
  constructor(private  _http: HttpClient) { }
  enroll(user: User) {
   return  this._http.post<any>(this._url, user);
  }
}
