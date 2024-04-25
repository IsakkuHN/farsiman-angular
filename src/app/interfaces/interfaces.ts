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
