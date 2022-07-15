import { connect } from 'react-redux';
import Payment from './Payment'

let mapStateToProps = (state) => ({
	addresses: state.geolocationReducer.addresses,
	currentCity: state.geolocationReducer.currentCity
})
let mapDispatchToProps = (dispatch) => ({
	
})
export default connect(mapStateToProps,mapDispatchToProps)(Payment);