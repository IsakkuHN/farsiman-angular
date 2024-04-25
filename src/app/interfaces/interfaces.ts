export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginResponse extends Object {
  token: string;
}

export interface AssignmentInterface extends Object {
  branchId: number;
  collaboratorId: string;
  distance: number;
}

export interface BranchInterface extends Object {
  id: number;
  name: string;
  address: string;
}

export interface CollaboratorInterface extends Object {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Key {
  collaboratorId: string;
  travelId: number;
}

export interface Travel {
  id: number;
  travelDate: string;
  travelDistance: number;
  travelRatePerKm: number;
  user: User;
  driver: Driver;
  branch: Branch;
  paid: boolean;
}

export interface User {
  id: string;
  username: string;
  password: string;
  role: string;
}

export interface Driver {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Branch {
  id: number;
  name: string;
  address: string;
}

export interface Collaborator {
  id: string;
  firstName: string;
  lastName: string;
}
