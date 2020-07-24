export interface AuthInterface {
  username: string;
  password: string;
}


export interface TokenInterface {
  access: string;
  refresh: string;
}


export class AuthMaker implements AuthInterface {
  username: string;
  password: string;

  static create() {
    return new AuthMaker();
  }
}


export class TokenMaker implements TokenInterface {
  access: string;
  refresh: string;

  static create() {
    return new TokenMaker();
  }
}
