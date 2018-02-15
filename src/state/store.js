import { createStore } from 'redux';
import reducer from './reducer.js';

export default (initialState) => {
    const store =  createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}