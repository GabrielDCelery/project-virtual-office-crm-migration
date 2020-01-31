import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from '../store';
import UICookieAuthenticator from '../components/UI/CookieAuthenticator';
import UILoginRedirector from '../components/UI/LoginRedirector';
import UIUserLanguageSetter from '../components/UI/UserLanguageSetter';
import config from '../config';
import '../language';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: config.styles.colors.primary
    },
    secondary: {
      main: config.styles.colors.secondary
    }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '16px',
        padding: '10px',
        //color: 'yellow',
        backgroundColor: config.styles.colors.primary
      }
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <UICookieAuthenticator>
          <UILoginRedirector>
            <UIUserLanguageSetter>
              <Component {...pageProps} />
            </UIUserLanguageSetter>
          </UILoginRedirector>
        </UICookieAuthenticator>
      </Provider>
    </ThemeProvider>
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
