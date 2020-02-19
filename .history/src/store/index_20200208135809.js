import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
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
const store = applyMiddleware(sagaMiddleware)(createStore)(reducers)
sagaMiddleware.run(rootSaga)
export default store