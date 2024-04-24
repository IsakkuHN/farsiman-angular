export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginResponse extends Object {
  token: string;
}
