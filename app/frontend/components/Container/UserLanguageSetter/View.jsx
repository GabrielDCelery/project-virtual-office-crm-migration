import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LoginRedirectorView({ children, stateUserLanguage }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(stateUserLanguage);
  }, [i18n, stateUserLanguage]);

  return <React.Fragment>{children}</React.Fragment>;
}
