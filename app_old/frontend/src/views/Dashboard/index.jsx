import Behaviour from './Dashboard.Behaviour';
import Styles from './Dashboard.Styles';
import View from './Dashboard.View';

const Dashboard = Behaviour(Styles(View));

export { Dashboard };