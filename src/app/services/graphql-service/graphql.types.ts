export interface UserSignInInput {
  identifier: string;
  password: string;
}

export interface UserSignInOutput {
  message: string;
  token: string;
}
