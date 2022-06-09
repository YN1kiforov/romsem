import { connect } from 'react-redux'
import CartInfo from './CartInfo'

let mapStateToProps = (state) => {
  return {
    delivery: state.cartReducer.delivery,
    discount: state.cartReducer.discount,
    cartPrice: state.cartReducer.cartPrice,
    cartList: state.cartReducer.cart,
    cartIsEmpty: state.cartReducer.cartIsEmpty,
    finalCartPrice: state.cartReducer.finalCartPrice,
  }
}

export default connect(mapStateToProps, {})(CartInfo);
