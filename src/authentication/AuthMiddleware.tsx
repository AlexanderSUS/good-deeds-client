import { FC, ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Path } from '../constants/common';
import { useAppDispatch, useAppSelector } from '../hooks/typedHooks';
import { verify } from '../store/authSlice';
import { notificationSelector } from '../store/notificationSlice';

type Props = {
  children: ReactElement;
};

const AuthMiddleware: FC<Props> = ({ children }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector(notificationSelector);

  useEffect(() => {
    dispatch(verify())
      .unwrap()
      .then(() => {
        const origin = location.state?.from.pathname;
        navigate(origin || Path.dashboard);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isLoading) {
    return null;
  }

  return children;
};

export default AuthMiddleware;
