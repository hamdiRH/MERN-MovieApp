import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga'
const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)
export const store = createStore(rootReducer, enhancers)
sagaMiddleware.run(rootSaga)