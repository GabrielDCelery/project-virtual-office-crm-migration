import {
  PATH_TO_ADD_NEW_CONTRACT,
  PATH_TO_ADD_NEW_MAIL,
  PATH_TO_LOGIN,
  PATH_TO_LOGOUT,
  PATH_TO_DASHBOARD,
  PATH_TO_SEARCH_CONTRACTS,
  //PATH_TO_SEARCH_MAILS,
  PATH_TO_SEARCH_INSPECTIONS,
  PATH_TO_SEARCH_INVOICES /*,
  PATH_TO_USER_SETTINGS*/,
  PATH_TO_DATABASE_ADDRESSES,
  PATH_TO_MAIL_NOTIFICATIONS
} from 'consts';

export default [
  {
    bHasNavbar: false,
    bNeedsAuthentication: false,
    path: PATH_TO_LOGIN,
    component: 'Login'
  },
  {
    bHasNavbar: false,
    bNeedsAuthentication: false,
    path: PATH_TO_LOGOUT,
    component: 'Logout'
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_DASHBOARD,
    component: 'Dashboard',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_SEARCH_CONTRACTS,
    component: 'Search',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_MAIL_NOTIFICATIONS,
    component: 'MailsSearch',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_SEARCH_INSPECTIONS,
    component: 'Search',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_SEARCH_INVOICES,
    component: 'Search',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_DATABASE_ADDRESSES,
    component: 'Database',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_ADD_NEW_CONTRACT,
    component: 'ContractsAddNew',
    redirectTo: PATH_TO_LOGIN
  },
  {
    bHasNavbar: true,
    bNeedsAuthentication: true,
    path: PATH_TO_ADD_NEW_MAIL,
    component: 'MailsAddNew',
    redirectTo: PATH_TO_LOGIN
  }
];
