import { connect } from "react-redux";
import Review from "./Review";

let mapStateToProps = (state) => ({
	list: state.reviewReducer.reviewsList,
})

export default connect(mapStateToProps,{})(Review)