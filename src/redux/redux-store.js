import {combineReducers, createStore} from 'redux'
import cartReducer from './cart-reducer'
import catalogReducer from './catalog-reducer'
import productsReducer from './products-reducer'
import mainReducer from './main-reducer'
import reviewReducer from './review-reducer'


let reducers = combineReducers({
	productReducer: productsReducer,
	catalog: catalogReducer,
	cartReducer: cartReducer,
	mainReducer: mainReducer,
	reviewReducer: reviewReducer,
})

let store = createStore(reducers);

export default store
