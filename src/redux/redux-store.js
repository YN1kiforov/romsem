import {combineReducers, createStore} from 'redux'
import cartReducer from './cart-reducer'
import geolocationReducer from './geolocation-reducer'
import catalogReducer from './catalog-reducer'
import mainReducer from './main-reducer'
import reviewReducer from './review-reducer'


let reducers = combineReducers({
	catalog: catalogReducer,
	cartReducer: cartReducer,
	mainReducer: mainReducer,
	reviewReducer: reviewReducer,
	geolocationReducer: geolocationReducer,
})

let store = createStore(reducers);

export default store
