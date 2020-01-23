import _ from 'lodash';
import { createSelector } from 'reselect';

const getUserEmail = state => {
  return _.get(state, ['user', 'data', 'email'], null);
};

const getUserRules = state => {
  return _.get(state, ['user', 'data', 'rules'], []);
};

const getRbacRule = (state, props = {}) => {
  return props.rbacRule;
};

export const selectorIsUserAuthenticated = createSelector(
  [getUserEmail, getUserRules],
  (email, rules) => {
    return !_.isNil(email) && Array.isArray(rules) && rules.length > 0;
  }
);

export const selectorIsUserAuthorized = createSelector(
  [getUserRules, getRbacRule],
  (userRules, rbacRule) => {
    return _.isNil(rbacRule) || userRules.includes(rbacRule);
  }
);
