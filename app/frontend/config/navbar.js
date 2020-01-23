import {
  PATH_TO_ADD_NEW_CONTRACT,
  PATH_TO_ADD_NEW_MAIL,
  PATH_TO_DASHBOARD,
  //PATH_TO_DATABASE_ADDRESSES,
  PATH_TO_LOGOUT,
  PATH_TO_SEARCH_CONTRACTS,
  //PATH_TO_SEARCH_INSPECTIONS,
  //PATH_TO_SEARCH_INVOICES,
  //PATH_TO_SEARCH_MAILS,
  //PATH_TO_USER_SETTINGS,
  STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT,
  STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT,
  //STATIC_RBAC_RULE_INSPECTIONS_PAGE_VISIT,
  //STATIC_RBAC_RULE_INVOICES_PAGE_VISIT,
  STATIC_RBAC_RULE_MAILS_PAGE_VISIT,
  PATH_TO_MAIL_NOTIFICATIONS
} from '../consts';

export default [
  {
    path: PATH_TO_DASHBOARD,
    icon: 'DashboardIcon',
    label: 'Dashboard',
    rbacRule: STATIC_RBAC_RULE_DASHBOARD_PAGE_VISIT
  },
  {
    path: null,
    icon: 'ListAltIcon',
    label: 'Contracts',
    children: [
      {
        label: 'Add New',
        path: PATH_TO_ADD_NEW_CONTRACT,
        rbacRule: STATIC_RBAC_RULE_MAILS_PAGE_VISIT
      },
      {
        label: 'Search',
        path: PATH_TO_SEARCH_CONTRACTS,
        rbacRule: STATIC_RBAC_RULE_CONTRACTS_PAGE_VISIT
      }
    ]
  },
  {
    path: null,
    icon: 'ContactMailIcon',
    label: 'Mails',
    rbacRule: null,
    children: [
      /*
      {
        label: 'Search',
        path: PATH_TO_SEARCH_MAILS,
        rbacRule: null
      },*/
      {
        label: 'Add New',
        path: PATH_TO_ADD_NEW_MAIL,
        rbacRule: null
      },
      {
        label: 'Notify Clients',
        path: PATH_TO_MAIL_NOTIFICATIONS,
        rbacRule: null
      }
    ]
  },
  {
    path: null,
    icon: 'PersonIcon',
    label: 'User',
    rbacRule: null,
    children: [
      /*
      {
        label: 'Settings',
        path: PATH_TO_USER_SETTINGS,
        component: 'Settings',
        rbacRule: null
      },*/
      {
        label: 'Logout',
        path: PATH_TO_LOGOUT,
        component: 'Logout',
        rbacRule: null
      }
    ]
  }
];
