import { useEffect } from 'react';
import Router from 'next/router';

export default function LoginRedirectorView({ children, stateIsUserLoggedIn }) {
  useEffect(() => {
    stateIsUserLoggedIn ? Router.push('/') : Router.push('/login');
  }, [stateIsUserLoggedIn]);
  return <React.Fragment>{children}</React.Fragment>;
}
