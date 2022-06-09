import s from './CartInfo.module.css'

function CartInfo(props) {
  return (
    <div className='info'>
      {props.cartIsEmpty
        ? ''
        : <ul>
            <li className={s.item}>Стоимость <span>{props.cartPrice} ₽</span> </li>
            <li className={s.item}>Скидка <span>{props.discount} ₽</span> </li>
            <li className={s.item}>Доставка <span>{props.delivery ? `${props.delivery} ₽`: 'Бесплатно' }</span> </li>
            <li className={s.item}>Итого  <span>{props.finalCartPrice} ₽</span></li>
          </ul>}
    </div>
  );
}

export default CartInfo;
