import '../Content.scss';


import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

import s from './Review.module.css'

import { useState } from 'react'
function Review(props) {
	console.log(props)
	return (
		<div className='container'>
			<div className= {s.top}>
				<div className= {s.title}>Отзывы</div>
				<button className= {s.button}>+ Добавить отзыв</button>
			</div>
			<div className= {s.list}>
				{props.list.map((review)=>{
					return <div className={s.item}>
						<span className= {s.name}>{review['name']}</span>
						<span className= {s.date}>{review['date']}</span>
						<div className={s.comment}>{review['comment']}</div>
					</div>
				})}
			</div>
		</div>
	);
}

export default Review;