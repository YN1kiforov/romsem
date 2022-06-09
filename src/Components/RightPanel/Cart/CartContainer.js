import Cart from './Cart'
import { connect } from 'react-redux'
import { RemoveFromCartAC, ChangeAmountAC } from './../../../redux/cart-reducer'

let mapStateToProps = (state) => {
  return {
    cartPrice: state.cartReducer.cartPrice,
    cartList: state.cartReducer.cart,
    cartIsEmpty: state.cartReducer.cartIsEmpty,
  }
}
let mapDispatchToProps = (dispatch) => {
  
  return {
    removeFromCart: (name) => { dispatch(RemoveFromCartAC(name)) },
    changeAmount: (name,value) => {dispatch(ChangeAmountAC(name,value))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
