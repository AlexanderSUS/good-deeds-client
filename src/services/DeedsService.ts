import { AxiosResponse } from 'axios';

import { ApiEndpoints } from '../constants/common';
import { RegisterInput } from '../forms/FormRegistration';
import { GoodDeed, GoodDeedUpdateData } from '../types/deed';

import api from './api';

export default class DeedsService {
  static create(userId: string, registerInput: RegisterInput): Promise<AxiosResponse<GoodDeed>> {
    return api.post(`${ApiEndpoints.users}/${userId}/${ApiEndpoints.deeds}`, registerInput);
  }

  static getAll(userId: string): Promise<AxiosResponse<GoodDeed[]>> {
    return api.get(`${ApiEndpoints.users}/${userId}/${ApiEndpoints.deeds}`);
  }

  static getById(userId: string, deedId: string): Promise<AxiosResponse<GoodDeed>> {
    return api.get(`${ApiEndpoints.users}/${userId}/${ApiEndpoints.deeds}/${deedId}`);
  }

  static update(userId: string, deedId: string, deedData: Omit<GoodDeedUpdateData, '_id'>):
  Promise<AxiosResponse<GoodDeed>> {
    return api.patch(`${ApiEndpoints.users}/${userId}/${ApiEndpoints.deeds}/${deedId}`, deedData);
  }

  static delete(userId: string, deedId: string): Promise<AxiosResponse<void>> {
    return api.delete(`${ApiEndpoints.users}/${userId}/${ApiEndpoints.deeds}/${deedId}`);
  }
}
