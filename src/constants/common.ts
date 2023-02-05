import { TypedAxiosErrorResponseData } from '../types/store';

export enum Path {
  home = '/',
  login = 'login',
  register = 'register',
  unauthorized = '/unauthorized',
  dashboard = '/dashboard',
  friends = '/friends',
  profile = '/profile',
}

export enum ApiEndpoints {
  register = 'auth/register',
  login = 'auth/login',
  refresh = 'auth/refresh',
  logout = 'auth/logout',
  verify = 'auth',
  deeds = 'deeds',
  users = 'users',
}

export enum StatusCode {
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
}

export const unauthenticatedException: TypedAxiosErrorResponseData = {
  error: 'Error',
  message: 'You session expired',
  statusCode: StatusCode.unauthorized,
};
