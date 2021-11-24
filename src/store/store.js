import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo-reducer';

const reducer = combineReducers({
    todo: todoReducer
});

export default createStore(reducer, applyMiddleware(thunk));