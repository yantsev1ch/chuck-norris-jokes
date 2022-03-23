import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import jokeReducer from './jokeReducer';

const rootReducer = combineReducers({
    joke: jokeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;