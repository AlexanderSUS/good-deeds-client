import React, {
  FC, RefObject, useCallback, useEffect, useRef,
} from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import ValidationErrorMessage from '../ValidationErrorMessage/ValidationErrorMessage';

import styles from './DeedInput.module.scss';

type Props = {
  resetForm: VoidFunction;
};

const DeedInput: FC<Props> = ({ resetForm }) => {
  const inputRef: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);
  const { control, formState: { errors } } = useFormContext();

  const handleKeydown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      resetForm();
    }
  }, [resetForm]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <Controller
      control={control}
      defaultValue=""
      name="title"
      render={({
        field: {
          onChange, value,
        },
      }) => (
        <>
          <textarea
            className={`${styles.input}${errors.title ? ` ${styles.invalid}` : ''}`}
            name="title"
            autoComplete="none"
            placeholder="Feed the birds..."
            value={value}
            onChange={onChange}
            ref={inputRef}
          />
          <ValidationErrorMessage message={(errors.title ? errors.title?.message : '') as string} />
        </>
      )}
    />
  );
};

export default DeedInput;
