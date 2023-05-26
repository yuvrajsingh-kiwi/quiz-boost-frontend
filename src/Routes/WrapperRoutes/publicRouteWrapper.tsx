import React from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../paths';

const PublicRouteWrapper = (props: { element: any }) => {
  const { element } = props;
  const isAuthenticated = localStorage.getItem('quaz_access_token'); // Replace with your authentication logic

  if (isAuthenticated) {
    // If user is authenticated, redirect to a protected route
    return (
      <Navigate
        to={PATHS.DASHBOARD}
        replace
      />
    );
  }

  // If user is not authenticated, render the provided element
  return element;
};

export default PublicRouteWrapper;
