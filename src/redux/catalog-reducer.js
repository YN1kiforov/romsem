let initialState = {
	catalogList: [
		{ link: 'pizza', name: "Пицца", img: 'https://svgshare.com/i/f8J.svg' },
		{ link: 'sets', name: "Сеты", img: 'https://svgshare.com/i/f8A.svg' },
		{ link: 'wok', name: "WOK", img: 'https://svgshare.com/i/f6i.svg' },
		{ link: 'rolls', name: "Роллы", img: 'https://svgshare.com/i/f91.svg' },
		{ link: 'sushi', name: "Суши", img: 'https://svgshare.com/i/f7v.svg' },
		{ link: 'salad', name: "Салат", img: 'https://svgshare.com/i/f6j.svg' },
		{ link: 'soup', name: "Суп", img: 'https://svgshare.com/i/f7q.svg' },
		{ link: 'drinks', name: "Напитки", img: 'https://svgshare.com/i/f80.svg' },
	],
}
let catalogReducer = (state = initialState, action) => {
	return state
}

export default catalogReducer
