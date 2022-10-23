import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // "npm i" this module?
import reducers from './reducers/index';

const store = createStore(
    reducers,
    // composeWithDevTools() // add if installed
);

export default store;