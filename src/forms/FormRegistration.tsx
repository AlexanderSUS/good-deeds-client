import React from 'react';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit';
import ControlledFormInput from '../components/controlledFormInput/ControlledFormInput';
import FormStyledAuthentication from '../components/FormStyledAuthentication/FormStyledAuthentication';
import { useAppDispatch } from '../hooks/typedHooks';
import { register } from '../store/authSlice';
import { Path } from '../constants/common';

const registerSchema = object({
  nickname: string()
    .min(1, 'Nickname is required')
    .min(2, 'Nickname must be more than 2 characters')
    .max(20, 'Nickname must be less than 20 characters'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

export type RegisterInput = TypeOf<typeof registerSchema>;

const FormRegistration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const methods = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });
  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    dispatch(register(values)).unwrap().then((user) => {
      toast.success(`User ${user.nickname} was successfully registered!`);
      navigate(`/${Path.login}`);
    }).catch((err) => {
      toast.error(err.message || 'Something went wrong');
    });
  };

  return (
    <FormProvider {...methods}>
      <FormStyledAuthentication onSubmit={handleSubmit(onSubmitHandler)}>
        <ControlledFormInput name="nickname" type="input" label="Nickname" />
        <ControlledFormInput name="password" type="password" label="Password" />
        <ControlledFormInput name="passwordConfirm" type="password" label="Confirm password" />
        <ButtonSubmit value="submit" />
      </FormStyledAuthentication>
    </FormProvider>
  );
};

export default FormRegistration;
