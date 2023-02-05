import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/typedHooks';
import { notificationSelector } from '../../store/notificationSlice';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { isLoading } = useAppSelector(notificationSelector);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isLoading && <Loader />}
    </>
  );
};
export default Layout;
