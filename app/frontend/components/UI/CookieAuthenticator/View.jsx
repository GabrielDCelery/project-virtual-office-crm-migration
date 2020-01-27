import { useEffect } from 'react';
//import Router from 'next/router';

export default function AuthenticationView({
  actionAuthenticateUserByCookie,
  children
}) {
  useEffect(() => {
    actionAuthenticateUserByCookie();
    //Router.push('/login');
  }, [actionAuthenticateUserByCookie]);

  return <React.Fragment>{children}</React.Fragment>;
}
