import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import routerMiddleware from 'connected-react-router'
import history from './history'
import reducers from './reducers'
import rootSaga from './saga'

function thunk(dispatch, getState) {
    return function(next) {
        return function(action) {
            if(typeof action === 'function') {
                action(dispatch, getState)
            }else {
                next(action)
            }
        }
    }
}

const sagaMiddleware = createSagaMiddleware()
const store = applyMiddleware(routerMiddleware(history), sagaMiddleware)(createStore)(reducers)
sagaMiddleware.run(rootSaga)
export default store