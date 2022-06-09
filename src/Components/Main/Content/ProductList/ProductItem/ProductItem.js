import './../../Content.scss';

function ProductItem(props) {

	return (

		<div className='item'>
			<div className='img'>
				<img src={props.img} />
			</div>
			<div className='name'>{props.name}</div>
			<div className='info'>{props.info}</div>
			<div className='bottom'>
				<div className='price'>{props.price} ₽</div>
				<button onClick={() => { props.addToCart(props.name, props.price, props.img) }} className='button' type=''>В корзину</button>
			</div>
		</div>

	);
}

export default ProductItem;