import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import AuthFormInput from '../AuthFormInput/AuthFormInput';

type Props = {
  name: string;
  label: string;
  type: 'input' | 'password'
};

const ControlledFormInput: FC<Props> = ({
  name, label, type,
}) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({
        field: {
          onChange, value,
        },
      }) => (
        <AuthFormInput
          name={name}
          label={label}
          type={type}
          onChange={onChange}
          value={value}
          error={(errors[name] ? errors[name]?.message : '') as string}
        />

      )}
    />

  );
};
export default ControlledFormInput;
