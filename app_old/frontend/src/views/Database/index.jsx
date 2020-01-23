import Behaviour from './Database.Behaviour';
import Styles from './Database.Styles';
import View from './Database.View';

const Database = Behaviour(Styles(View));

export { Database };