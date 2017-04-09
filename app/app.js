import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.css';
import { fetchRecipes } from './actions/recipes';
import store from 'store';
import loadUI from 'ui/jquery/index';

loadUI();

store.dispatch(fetchRecipes());

window.store = store;

