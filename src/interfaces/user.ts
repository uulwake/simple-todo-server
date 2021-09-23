export interface ISignInUser {
  name: string;
  email: string;
  password: string;
}

export interface IResponseSignInUser {
  name: string;
  email: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IResponseLoginUser {
  name: string;
  email: string;
}
