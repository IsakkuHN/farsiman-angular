import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginAttempt(loginCredentials: any) {
    return this.http.post(
      GlobalConstants.appUrl + '/auth/login',
      loginCredentials,
      { headers: { skip: 'true' } }
    );
  }
}
