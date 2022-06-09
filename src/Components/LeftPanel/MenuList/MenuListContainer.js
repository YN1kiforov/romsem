import MenuList from './MenuList'
import {connect}  from 'react-redux'

let mapStateToProps = (state) => {
	return {
		catalogList: state.catalog.catalogList,
	}
}


export default connect(mapStateToProps, {})(MenuList)