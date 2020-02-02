import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    stateUserLanguage: state.user.language
  };
};

const mapActionsToProps = {};

export default function UserLanguageSetterStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
