import React from 'react';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ButtonSubmit from '../components/ButtonSubmit/ButtonSubmit';
import ControlledFormInput from '../components/controlledFormInput/ControlledFormInput';
import FormStyledAuthentication from '../components/FormStyledAuthentication/FormStyledAuthentication';

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
  const methods = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });
  const { handleSubmit } = methods;

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    console.log(values);
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
