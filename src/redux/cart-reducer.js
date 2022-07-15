let initialState = {
	cart: {},
	cartPrice: 0,
	discount: 0,
	delivery: 500,
	cartIsEmpty: true,
	finalCartPrice: 0,
}

let ADD_TO_CART = 'ADD-TO-CART'
let REMOVE_FROM_CART = 'REMOVE-FROM-CART'
let CHANGE_AMOUNT = 'CHANGE-AMOUNT'

let cartReducer = (state = initialState, action) => {

	let stateCopy = JSON.parse(JSON.stringify(state))

	function checkCartIsEmpty() {
		Object.keys(stateCopy.cart).length ? stateCopy.cartIsEmpty = false : stateCopy.cartIsEmpty = true
	}
	function updateFinalPrice(){
		stateCopy.finalCartPrice = stateCopy.cartPrice + (Number(stateCopy.delivery) || 0) - stateCopy.discount
	}
	function updateDeliveryPrice(){
		(stateCopy.cartPrice >= 1000) ? stateCopy.delivery = 0 : stateCopy.delivery = 500;
	}
	function updateCartPrice() {
		let currentPrice = 0;
		let products = Object.keys(stateCopy.cart)
		products.forEach((product) => {
			currentPrice += stateCopy.cart[product].price * stateCopy.cart[product].count
		})
		stateCopy.cartPrice = currentPrice;
	}
	
	if (action.type === ADD_TO_CART) {
		if (stateCopy.cart[action.name]) {
			stateCopy.cart[action.name].count += 1
		} else {
			stateCopy.cart[action.name] = {
				count: 1,
				price: action.price,
				image: action.image,
			};
		}
		checkCartIsEmpty()
		updateCartPrice()
		updateDeliveryPrice()
		updateFinalPrice()
	} else if (action.type === REMOVE_FROM_CART) {
		delete stateCopy.cart[action.name]
		checkCartIsEmpty()
		updateCartPrice()
		updateDeliveryPrice()
		updateFinalPrice()
	}
	else if (action.type === CHANGE_AMOUNT) {
		stateCopy.cart[action.name].count += action.value
		if (stateCopy.cart[action.name].count === 0){
			delete stateCopy.cart[action.name]
		}
		checkCartIsEmpty()
		updateCartPrice()
		updateDeliveryPrice()
		updateFinalPrice()
	}
	return stateCopy
}

export default cartReducer

export let AddToCartAC = (name, price, image) => {
	
	return {
		type: ADD_TO_CART,
		name,
		price,
		image,
	}
}
export let RemoveFromCartAC = (name) => {
	return {
		type: REMOVE_FROM_CART,
		name,
	}
}
export let ChangeAmountAC = (name, value) => {
	return {
		type: CHANGE_AMOUNT,
		name,
		value,
	}
}
