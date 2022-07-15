import { connect } from 'react-redux';
import Header from './Header'
import { setCityAC } from './../../../redux/geolocation-reducer'

let mapStateToProps = (state) => ({
	cities: state.geolocationReducer.cities,
  city: state.geolocationReducer.currentCity
})
let mapDispatchToProps = (dispatch) => ({
	setCity: (newCity) => {dispatch(setCityAC(newCity))}
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);