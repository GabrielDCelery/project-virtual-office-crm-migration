import { connect } from 'react-redux';
import {} from '~/store';

const mapStateToProps = state => {
  return {};
};

const mapActionsToProps = {};

export default function FormNaturalPersonStore(ToWrapComponent) {
  let WrapperComponent = props => {
    return <ToWrapComponent {...props} />;
  };

  return connect(mapStateToProps, mapActionsToProps)(WrapperComponent);
}
