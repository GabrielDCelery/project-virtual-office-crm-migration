import { useEffect } from 'react';
import Router from 'next/router';

export default function AuthenticationView({ children }) {
  useEffect(() => {
    console.log('redirect');
    Router.push('/dashboard');
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}
