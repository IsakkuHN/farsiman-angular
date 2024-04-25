import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  constructor(private httpClient: HttpClient) {}

  ENDPOINT_STRING = GlobalConstants.appUrl + '/travel';

  getAllTravels() {
    return this.httpClient.get(this.ENDPOINT_STRING);
  }

  getTravelersByTravelId(travelId: number) {
    return this.httpClient.get(this.ENDPOINT_STRING + '/travelers/' + travelId);
  }
}
