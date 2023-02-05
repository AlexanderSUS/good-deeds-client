import { AxiosResponse } from 'axios';

import { ApiEndpoints } from '../constants/common';
import { LoginInput } from '../forms/FormLogin';
import { RegisterInput } from '../forms/FormRegistration';
import { User } from '../types/user';

import api from './api';

export default class AuthService {
  static register(registerInput: RegisterInput): Promise<AxiosResponse<User>> {
    return api.post(ApiEndpoints.register, registerInput);
  }

  static login(loginInput: LoginInput): Promise<AxiosResponse<User>> {
    return api.post(ApiEndpoints.login, loginInput);
  }

  static logout(): Promise<AxiosResponse<void>> {
    return api.post(ApiEndpoints.logout);
  }

  static refresh(): Promise<AxiosResponse<User>> {
    return api.get(ApiEndpoints.refresh);
  }

  static verify(): Promise<AxiosResponse<User>> {
    return api.get(ApiEndpoints.verify);
  }
}
