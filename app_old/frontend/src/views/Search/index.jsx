import Behaviour from './Search.Behaviour';
import Styles from './Search.Styles';
import View from './Search.View';

const Search = Behaviour(Styles(View));

export { Search };