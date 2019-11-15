import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

function reducer(state, action) {
    console.log(state, action);
}

// const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancer(
    applyMiddleware(thunk)
)

const store = createStore(reducer, middleware);
export default store;