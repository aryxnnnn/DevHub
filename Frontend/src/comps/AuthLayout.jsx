import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

function AuthLayout({children , authentication}) {

  const { isAuthenticated } = useSelector((state) => state.user);

  if (isAuthenticated === null) {
    return <LoadingSpinner/>;
  }

  if (authentication && !isAuthenticated) {
    return <Navigate  to = "/login" />;
  }
  
  if (!authentication && isAuthenticated) {
    return <Navigate  to = "/"/>;
  }

  return children;
}

export default AuthLayout