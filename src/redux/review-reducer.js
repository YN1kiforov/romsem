let initialState = {
	reviewsList: [
		{name:'Розалия', date:'02.24.21',comment:'Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне'},
		{name:'Елена', date:'02.23.21',comment:'Ооочень вкусно!!!!!'},
		{name:'Сергей Гаврилюк', date:'02.23.21',comment:'Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )'},
	]
}

let ADD_TO_CART = 'ADD-TO-CART'
let REMOVE_FROM_CART = 'REMOVE-FROM-CART'

let reviewReducer = (state = initialState, action) => {
	return state
}

export default reviewReducer

