export const selectorIsUserLoggedIn = state => {
  return state.user.email !== undefined && state.user.email !== null;
};
