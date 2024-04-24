import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../../../utils/global-constants';

@Injectable({
  providedIn: 'root',
})
export class CollaboratorService {
  constructor(private httpClient: HttpClient) {}

  getAllCollaborators() {
    return this.httpClient.get(GlobalConstants.appUrl + '/collaborator');
  }
}
