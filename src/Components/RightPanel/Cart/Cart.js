import s from './Cart.module.scss'
import { Link } from "react-router-dom";
function Cart(props) {

  return (
    <div className={s.cart}>

      <div className={s.title}>Ваша корзина</div>
      <div className={props.cartIsEmpty ? `${s.list} ${s.isEmpty}` : s.list}>

        {props.cartIsEmpty
          ? <div>Добавьте же скорее что-нибудь!</div>
          : Object.entries(props.cartList).map((item) => {
            return <div className={s.item}>
              <div className={s.img}>
                <img src={item[1].image}></img>
              </div>
              <div className={s.info}>
                <div className= {s.name}>{item[0]}</div>
                <div className={s.item_bot}>
                  <div className={s.item_amount}>
                    <span onClick={() => { props.changeAmount(item[0], -1) }} className={s.count_button}></span>
                    <div>{item[1].count}</div>
                    <span onClick={() => { props.changeAmount(item[0], 1) }} className={s.count_button} />
                  </div>
                  <div className={s.item_price}>{item[1].price} ₽</div>
                </div>
              </div>
              <span className={s.remove} onClick={() => { props.removeFromCart(item[0]) }}></span>
            </div>
          })}
      </div>
      {props.cartIsEmpty
        ? <div className={s.bot}>Бесплатная доставка от 1000 ₽</div>
        : <Link className={`${s.bot} ${s.button}`} to='/payment'>Заказать</Link>
      }
    </div>
  );
}
export default Cart;
