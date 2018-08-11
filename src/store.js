import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'

// let store = createStore(reducers, applyMiddleware(thunk))
const initialState = {};

const middleWare = [thunk];

const store = createStore (
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    // Redux Dev tools extension. No es necesario en producción
    // https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  )
)

export default store;
