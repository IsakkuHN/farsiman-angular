import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  constructor(private httpClient: HttpClient) {}

  getAllAssignments() {
    return this.httpClient.get(GlobalConstants.appUrl + '/assignation');
  }
}
