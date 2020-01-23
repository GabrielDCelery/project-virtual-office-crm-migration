import Behaviour from './Login.Behaviour';
import Styles from './Login.Styles';
import View from './Login.View';

const Login = Behaviour(Styles(View));

export { Login };