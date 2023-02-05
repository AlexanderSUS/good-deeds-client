import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, TypeOf } from 'zod';

import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit';
import ControlledFormInput from '../components/controlledFormInput/ControlledFormInput';
import FormStyledAuthentication from '../components/FormStyledAuthentication/FormStyledAuthentication';
import { Path, StatusCode } from '../constants/common';
import { useAppDispatch } from '../hooks/typedHooks';
import { login } from '../store/authSlice';

const loginSchema = object({
  nickname: string()
    .min(1, 'Nickname is required')
    .min(2, 'Nickname must be more than 2 characters')
    .max(20, 'Nickname must be less than 20 characters'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export type LoginInput = TypeOf<typeof loginSchema>;

const FormLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });
  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    dispatch(login(values)).unwrap().then((user) => {
      toast.info(`Hello ${user.nickname}!`);
      navigate(`${Path.dashboard}`);
    })
      .catch((err) => {
        if (err.statusCode && err.statusCode === StatusCode.notFound) {
          toast.error('User does not exist or wrong password');
        } else {
          toast.error(err.message || 'Something went wrong');
        }
      });
  };

  return (
    <FormProvider {...methods}>
      <FormStyledAuthentication onSubmit={handleSubmit(onSubmitHandler)}>
        <ControlledFormInput name="nickname" type="input" label="Nickname" />
        <ControlledFormInput name="password" type="password" label="Password" />
        <ButtonSubmit value="submit" />
      </FormStyledAuthentication>
    </FormProvider>
  );
};

export default FormLogin;
