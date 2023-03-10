import { AppDispatch, RootState } from '../store/store';

export type TypedAxiosErrorResponseData = {
  error: string;
  message: string;
  statusCode: number;
};

export type AsyncThunkConfig = {
  state: RootState;
  rejectValue: TypedAxiosErrorResponseData;
  dispatch: AppDispatch;
};

export type AsyncThunkWithMeta = {
  state: RootState;
  rejectValue: TypedAxiosErrorResponseData;
  fulfilledMeta: string[];
};
