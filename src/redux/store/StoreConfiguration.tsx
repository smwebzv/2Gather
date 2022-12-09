import { combineReducers, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import AuthReducers from '../reducers/AuthReducers'

const rootReducer = combineReducers({
    auth: AuthReducers,
})

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))

export default store
