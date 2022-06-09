import './../Content.scss';
import s from './MainPage.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import MainPageItem from './MainPageItem/MainPageItem';

function MainPage(props) {
	console.log(props)
	return (
		<div className='container'>

			<Swiper
				className={s.swiper}
				modules={[Pagination, Autoplay]}
				pagination={{
					bulletActiveClass: `${s.activeBullet}`,
					clickable: true,
				}}
				loop={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
			>
				{props.slides.map((slide) => {
					return (
						<SwiperSlide>
							<img src= {slide}></img>
						</SwiperSlide>
					)
				})}
			</Swiper>
			<div className={s.catalog}>
				{props.catalog.map((item) => {
					return <MainPageItem
						path={item['path']}
						img={item['img']}
						name={item['name']}
					/>
				})}
			</div>
		</div>
	);
};

export default MainPage;