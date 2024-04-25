import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';
import { AssignmentInterface } from '../../../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  private ENDPOINT_STRING = GlobalConstants.appUrl + '/assignation';

  constructor(private httpClient: HttpClient) {}

  getAllAssignments() {
    return this.httpClient.get(this.ENDPOINT_STRING);
  }

  createNewAssignment(assignment: AssignmentInterface) {
    const { branchId, collaboratorId, distance } = assignment;
    return this.httpClient.post(this.ENDPOINT_STRING, {
      key: {
        branchId,
        collaboratorId,
      },
      distance,
    });
  }
}
