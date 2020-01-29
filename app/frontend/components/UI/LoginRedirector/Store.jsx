import { connect } from 'react-redux';
import { selectorIsUserLoggedIn } from '../../../store';

const mapStateToProps = state => {
  return {
    stateIsUserLoggedIn: selectorIsUserLoggedIn(state)
  };
};

const mapActionsToProps = {};

export default function LoginRedirectorStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
