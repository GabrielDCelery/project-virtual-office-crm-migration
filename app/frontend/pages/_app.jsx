import { Provider } from 'react-redux';
import store from '../store';
import UICookieAuthenticator from '../components/UI/CookieAuthenticator';
import UILoginRedirector from '../components/UI/LoginRedirector';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UICookieAuthenticator>
        <UILoginRedirector>
          <Component {...pageProps} />
        </UILoginRedirector>
      </UICookieAuthenticator>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
