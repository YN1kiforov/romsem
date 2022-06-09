import { Link } from 'react-router-dom';
import s from '.././MainPage.module.scss'

function MainPageItem(props) {
	return (

		<div className={`${s.wok} ${s.item}`}>
			<Link to={`/${props.path}`}>
				<img src={props.img} />
				<div className={s.bot}>{props.name}</div>
			</Link>
		</div>
	);
}

export default MainPageItem;