import BaseAPI from "services/api/base";
import { METHOD } from "services/http/transport";
import { IUser, IUserData } from "types/models";

const AUTH_PATH = "/api/v2/auth";

export interface ILoginRequestData {
  login: string;
  password: string;
}

export interface ISignupRequestData extends IUserData {}

export interface ISignupResponse {
  id: number;
}

interface IUserInfoResponseData extends IUser {}

class AuthAPI extends BaseAPI {
  constructor() {
    super(AUTH_PATH);
  }

  public login = async (data: ILoginRequestData) =>
    this.httpFetch<typeof data>("/signin", METHOD.POST, data);

  public signup = async (data: ISignupRequestData) =>
    this.httpFetch<typeof data, ISignupResponse>("/signup", METHOD.POST, data);

  public logout = async () => this.httpFetch("/logout", METHOD.POST);

  public getLoggedUser = async () =>
    this.httpFetch<unknown, IUserInfoResponseData>("/user", METHOD.GET);
}

export default new AuthAPI();
