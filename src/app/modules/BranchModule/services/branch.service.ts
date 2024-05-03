import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private httpClient: HttpClient) {}

  ENDPOINT_STRING = GlobalConstants.appUrl + '/branch';

  getAllBranches() {
    return this.httpClient.get(this.ENDPOINT_STRING);
  }
}
