let initialState = {
	currentCity: "Москва",
	cities: ["Москва", "Санкт-Петербург", "Новосибирск", "Красноярск", "Екатеринбург"],
	addresses: {
		"Москва": ["г Москва, ул Раменки, д 20", "г Москва, ул Лобачевского, д 92", "г Москва, ул Коштоянца, д 29", "г Москва, ул Удальцова, д 12"],
		"Санкт-Петербург": ["г Санкт-Петербург, ул Галерная, д 36-38", "г Москва, ул Большая Пионерская, д 15"],
		"Новосибирск": ["г Новосибирск, ул Чаплыгина, д 101", "г Новосибирск, ул Попова, д 109"],
		"Красноярск": ["г Красноярск, ул Линейная, д 12", "г Красноярск, ул Авиаторов, д 25"],
		"Екатеринбург": ["г Екатеринбург, ул 8 Марта, д 75", "г Москва, ул Луганская, д 3 к 1"]
	}
}

let SET_CITY = "SET-CITY"

let geolocationReducer = (state = initialState, action) => {
	let stateCopy = JSON.parse(JSON.stringify(state))
	if (action.type = SET_CITY) {
		stateCopy.currentCity = action.newCity || "Москва"
	}
	return stateCopy
}

export let setCityAC = (newCity) => {
	return {
		type: SET_CITY,
		newCity,
	}
}

export default geolocationReducer