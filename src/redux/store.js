import { createStore } from "redux";
import { goodsReducer } from "./reducers/goods";



const store = createStore(goodsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store
export default store