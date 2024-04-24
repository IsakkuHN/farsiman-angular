import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  constructor(private httpClient: HttpClient) {}

  getAllTravels() {
    return this.httpClient.get(GlobalConstants.appUrl + '/travel');
  }
}
