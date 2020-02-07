import { Provider } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import store from '~/store';
import ContainerCookieAuthenticator from '~/components/Container/CookieAuthenticator';
import ContainerLoginRedirector from '~/components/Container/LoginRedirector';
import ContainerUserLanguageSetter from '~/components/Container/UserLanguageSetter';
import ContainerSnackBar from '~/components/Container/SnackBar';
import config from '~/config';
import '~/language';
import './_app.css';

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
        <ContainerCookieAuthenticator>
          <ContainerLoginRedirector>
            <ContainerUserLanguageSetter>
              <Component {...pageProps} />
              <ContainerSnackBar />
            </ContainerUserLanguageSetter>
          </ContainerLoginRedirector>
        </ContainerCookieAuthenticator>
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
