import { useEffect } from 'react';

export default function CookieAuthenticatorView({
  actionAuthenticateUserByCookie,
  children
}) {
  useEffect(() => {
    actionAuthenticateUserByCookie();
  }, [actionAuthenticateUserByCookie]);

  return <React.Fragment>{children}</React.Fragment>;
}
