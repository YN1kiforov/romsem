import { connect } from 'react-redux';
import MainPage from './MainPage'



let mapStateToProps = (state) => ({
	slides: state.mainReducer.slides,
	catalog: state.mainReducer.catalog
})

export default connect(mapStateToProps, {})(MainPage);
