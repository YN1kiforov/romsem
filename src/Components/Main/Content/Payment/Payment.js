import './../Content.scss';
import s from './Payment.module.scss'
import { Formik, input, Form, useFormik, yupToFormErrors, formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputMask from 'react-input-mask';
import Autocomplete from '@mui/material/Autocomplete';

function Payment(props) {
	const validationSchema = yup.object({
		mail: yup
			.string('Enter your email')
			.email('Enter a valid email'),

		name: yup
			.string('Enter your password')
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
		phone: yup
			.string('Enter your password').test(
				(value) => {
					if (!value) return false;
					if (value.includes("_")) return false
					return true
				}
			)
	});
	const onChangeAddress = (query) => {
		var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
		var token = "5af9830e3f39971a59d1bacd685dc02fd5b9962a";

		var options = {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
				"Authorization": "Token " + token
			},
			body: JSON.stringify({ query: query, count: 2 })
		}
		function addressFormatter(query) {
			let array = JSON.parse(query).suggestions
			let result = array.map((item) => {
				if (item) {
					return item.value
				}
			})
			return result
		}
		fetch(url, options)
			.then(response => response.text())
			.then(result => setOptions(addressFormatter(result)))
			.catch(error => console.log("error", error));
	}
	const [options, setOptions] = useState([])

	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			address: "",
			house: "",
			money: "",
			comment: "",
			apartment: "",
			entrance: "",
			floor: "",
			code: "",
			mail: "",

		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	const [paymentActiveTab, setPaymentActiveTab] = useState('cash')
	const [deliveryActiveTab, setDeliveryActiveTab] = useState('courier')
	return (
		<div className={s.payment}>
			<div className={s.title}>Ваши данные</div>
			<form onSubmit={formik.handleSubmit} className={s.form}>
				<div className={s.wrapper}>
					<div className={s.client}>
						<InputMask
							mask="+7 999 999 99 99"
							value={formik.values.phone}
							onChange={formik.handleChange}
							maskChar=" "
						>
							{() => <TextField variant="outlined" label="Телефон*" size='small' className={`${s.phone} ${s.input}`} name="phone" />}
						</InputMask>

						<TextField name='name' variant="outlined" label="Имя*" size='small'
							value={formik.values.name}
							onChange={formik.handleChange}
							className={formik.errors.name && formik.touched.name ? `${s.name} ${s.input} ${s.error}` : `${s.input} ${s.name}`}
						>

						</TextField>

						<div className={s.change}>
							<div onClick={() => setPaymentActiveTab('cash')} className={paymentActiveTab === 'cash' ? s.active : ''}>Наличными</div>
							<div onClick={() => setPaymentActiveTab('card')} className={paymentActiveTab === 'card' ? s.active : ''}>Картой</div>
						</div>

						{paymentActiveTab === 'cash'
							? <div className={s.money}>
								<div>Подготовить сдачу с</div>
								<TextField value={formik.values.money} onChange={formik.handleChange} className={s.input} variant="outlined" label="Сумма" size='small' name='money' ></TextField>
							</div>
							:
							<div className={s.money}>
								<div>Наш оператор свяжется с вами</div>
							</div>
						}
						<div className={s.comment}>
							<TextField
								value={formik.values.email} onChange={formik.handleChange}
								fullWidth variant="outlined" label="Комменатрий к заказу" size='small' name='comment' className={s.input}></TextField>
						</div>
					</div>
					<div className={s.getting}>

						<div className={s.howGet}>
							<div onClick={() => setDeliveryActiveTab('courier')} className={deliveryActiveTab === 'courier' ? s.active : ''}>Курьером</div>
							<div onClick={() => setDeliveryActiveTab('pickup')} className={deliveryActiveTab === 'pickup' ? s.active : ''}>Самовывоз</div>
						</div>
						{deliveryActiveTab === 'courier'
							? <div className={`${s.address} ${s.grid}`}>
								<Autocomplete
									filterOptions={(x) => x}
									id="free-solo-demo"
									freeSolo
									className={formik.errors.street && formik.touched.street ? `${s.street} ${s.input} ${s.error}` : `${s.street} ${s.input}`}
									options={options}
									onChange={(e,newValue) => {formik.setFieldValue('address', newValue)}}
									renderInput={(params) => <TextField {...params} label="Адрес*" size='small'
										name='address'
										onChange={(e) => {onChangeAddress(e.target.value); formik.setFieldValue('address', e.target.value)}}
										
										value={formik.values.street}
									/>}
								/>
								{/* <TextField value={formik.values.street} onChange={formik.handleChange} variant="outlined" label="Адрес*" size='small' name='address' key="1"
									className={formik.errors.street && formik.touched.street ? `${s.street} ${s.input} ${s.error}` : `${s.street} ${s.input}`}></TextField> */}

								<TextField value={formik.values.apartment} onChange={formik.handleChange} className={s.input} variant="outlined" label="Кв" size='small' name='apartment'></TextField>
								<TextField value={formik.values.entrance} onChange={formik.handleChange} className={s.input} variant="outlined" label="Подъезд" size='small' name='entrance'></TextField>
								<TextField value={formik.values.floor} onChange={formik.handleChange} className={s.input} variant="outlined" label="Этаж" size='small' name='floor'></TextField>
								<TextField value={formik.values.code} onChange={formik.handleChange} className={s.input} variant="outlined" label="Код" size='small' name='code' ></TextField>
							</div>
							: <div className={`${s.address}`}>
								<TextField onChange={formik.handleChange} key="0" className={s.input} fullWidth variant="outlined" label="Адрес" size='small' disabled value=""></TextField>
							</div>}

						<div className={s.mail}>
							<TextField value={formik.values.mail} onChange={formik.handleChange} fullWidth className={s.input} variant="outlined" label="E-mail(необязательно)" size='small' name='mail'></TextField>
						</div>
					</div>
				</div>
				<button type="submit">Оформить заказ</button>
			</form>

			<div className={s.info}>
				Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с <a href='#'>Публичной оффертой</a>
			</div>
		</div>

	);
}
export default Payment;