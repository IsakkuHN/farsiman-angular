import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../SharedModule/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isUserAuthenticated(): boolean {
    const user = localStorage.getItem('token');

    if (user) {
      return true;
    }
    return false;
  }
}
