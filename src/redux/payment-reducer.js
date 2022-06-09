let initialState = {
	cartPayment: false,
	courierDelivery: true,
}

let UPDATE_INPUT_VALUE = 'UPDATE-INPUT-VALUE'

let paymentReducer = (state = initialState, action) => {

	let stateCopy = JSON.parse(JSON.stringify(state))

	return stateCopy
}

export default paymentReducer

export let AddToCartAC = (name, price) => {
	return {
		type: ADD_TO_CART,
		name,
		price,
	}
}
