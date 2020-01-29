import { connect } from 'react-redux';
import { actionAuthenticateUserByCookie } from '../../../store';

const mapStateToProps = state => {
  return {};
};

const mapActionsToProps = {
  actionAuthenticateUserByCookie
};

export default function CookieAuthenticatorStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
