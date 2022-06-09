let initialState = {
	slides:[
		'https://i.postimg.cc/59CcZBRb/slide.png',
		'https://i.postimg.cc/59CcZBRb/slide.png',
		'https://i.postimg.cc/59CcZBRb/slide.png',
		'https://i.postimg.cc/59CcZBRb/slide.png',
		'https://i.postimg.cc/59CcZBRb/slide.png'
	],
	catalog: [
		{name:'WOK', img:'https://i.postimg.cc/rwy83ZY6/image.jpg', path: 'catalog/wok'},
		{name:'Суп', img:'https://i.postimg.cc/xTRFC9nZ/image.jpg', path: 'catalog/soup'},
		{name:'Салат', img:'https://i.postimg.cc/SRQ8JfNw/image.jpg', path: 'catalog/salad'},
		{name:'Пицца', img:'https://i.postimg.cc/FR75s8J2/image.jpg', path: 'catalog/pizza'},
		{name:'Сеты', img:'https://i.postimg.cc/15gJ9yns/image.jpg', path: 'catalog/sets'},
	]
}
let mainReducer = (state = initialState, action) => {
	return state
}

export default mainReducer
