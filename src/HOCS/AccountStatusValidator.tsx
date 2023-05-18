import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import Loader from '../components/UI/Loader';

type TProps = {
  protectedPage: JSX.Element;
  fallBackRoute: string;
  isRegistration?: boolean;
};

export const AccountStatusValidator: FC<TProps> = ({
  protectedPage,
  fallBackRoute,
  isRegistration,
}) => {
  const [user, isLoading] = useAuthState(auth);
  if (isLoading) return <Loader />;
  if (isRegistration) {
    return user ? <Navigate to={fallBackRoute} /> : protectedPage;
  } else {
    return user ? protectedPage : <Navigate to={fallBackRoute} />;
  }
};
