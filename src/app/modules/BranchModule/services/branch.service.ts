import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  constructor(private httpClient: HttpClient) {}

  getAllBranches() {
    return this.httpClient.get(GlobalConstants.appUrl + '/branch');
  }
}
