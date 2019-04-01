import { reducerName } from './reducer'
import { createStore } from 'redux'

const store = createStore(reducerName,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store