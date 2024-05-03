import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  ENDPOINT_STRING = GlobalConstants.appUrl + '/driver';

  constructor(private httpClient: HttpClient) {}

  getAllDrivers() {
    return this.httpClient.get(this.ENDPOINT_STRING);
  }
}
