/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  RefObject, useCallback, useEffect, useRef,
} from 'react';
import {
  FormProvider, SubmitHandler, useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, TypeOf } from 'zod';

import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import DeedInput from '../../components/DeedInput/DeedInput';
import { useAppDispatch } from '../../hooks/typedHooks';
import { createGoodDeed } from '../../store/deedsSlice';

import styles from './FormCreateGoodDeed.module.scss';

const loginSchema = object({
  title: string()
    .min(1, 'Good deed is required')
    .min(2, 'Good deed must be more than 2 characters')
    .max(200, 'Good deed must be less than 200 characters'),
});

export type CreateDeedInput = TypeOf<typeof loginSchema>;

const FormGoodDeed = () => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();
  const methods = useForm<CreateDeedInput>({ resolver: zodResolver(loginSchema) });
  const {
    handleSubmit, reset, clearErrors,
  } = methods;

  const resetForm = useCallback(() => {
    reset();
    clearErrors();
  }, [clearErrors, reset]);

  const handleClickOutSide = useCallback((event: MouseEvent) => {
    const target = event.target as unknown as globalThis.Node;

    if (formRef.current && !formRef.current.contains(target)) {
      resetForm();
    }
  }, [resetForm]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [handleClickOutSide]);

  const onSubmitHandler: SubmitHandler<CreateDeedInput> = (value) => {
    dispatch(createGoodDeed(value));
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form ref={formRef} className={styles.form} onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor="title" className={styles.label}>Write down a new good deed</label>
        <DeedInput resetForm={resetForm} />
        <ButtonSubmit value="Create" />
      </form>
    </FormProvider>
  );
};

export default FormGoodDeed;
