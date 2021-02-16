import { createStore, combineReducers  } from "redux"
import { goodsReducer } from "./reducers/goods"
import { cartReducer } from "./reducers/cart"

const reducers = combineReducers({goods: goodsReducer, cart: cartReducer})



const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store
export default store