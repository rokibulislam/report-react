import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/rootReducer'

export const initStore = (initialState, options) => {
    return createStore( 
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
};

export const store = createStore( 
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);