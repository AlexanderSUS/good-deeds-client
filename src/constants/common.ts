export enum Path {
  home = '/',
  login = 'login',
  register = 'register',
  unauthorized = '/unauthorized',
  dashboard = '/dashboard',
}

export enum ApiEndpoints {
  register = 'auth/register',
  login = 'auth/login',
  refresh = 'auth/refresh',
  logout = 'auth/logout',
  verify = 'auth',
}

export enum StatusCode {
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
}
