import './../Content.scss';
import s from './Payment.module.scss'
import { Formik, Field, Form, useFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import InputMask from 'react-input-mask';
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
		// .min(10)
	});


	const [paymentActiveTab, setPaymentActiveTab] = useState('cash')
	const [deliveryActiveTab, setDeliveryActiveTab] = useState('courier')
	const [phoneNumber, setPhoneNumber] = useState("");
	return (
		<div className={s.payment}>

			<div className={s.title}>Ваши данные</div>
			<Formik
				initialValues={{
					phone: '',
					name: '',
					comment: '',
					money: '',
					street: '',
					house: '',
					apartment: '',
					entrance: '',
					floor: '',
					code: '',
					mail: '',
				}}
				validationSchema={validationSchema}
				onSubmit={async (values) => {

					alert(JSON.stringify({ number: phoneNumber, ...values }, null, 2));
				}}>
				{({ errors, touched }) => (
					<Form className={s.form}>
						<div className={s.wrapper}>
							<div className={s.client}>
								<div>
									<Field name="phone">
									
										{({ field }) => (
											<InputMask
												{...field}
												name="phone"
												mask="+7 (999) 999 99 99"
												placeholder="Телефон"
												type="text"
												className={
													errors.phone && touched.phone
														? `${s.error}`
														: null
												}
											//onChange={handleChange}
											//onBlur={handleBlur}
											/>
										)}

									</Field>
									{/* <InputMask
										mask="+7 (999) 999 99 99"
										value={phoneNumber}
										name="phone"
										// onChange={(e) => { setPhoneNumber(e.target.value) }}
										onChange={function(){console.log(this) }}
										placeholder="Телефон"
									>
										 {function(props){<Field valuevalue={phoneNumber} />}} 
											
									</InputMask> */}
									<Field name='name'
										className={errors.name && touched.name ? `${s.name} ${s.error}` : s.name} placeholder='Имя'></Field>
								</div>

								<div className={s.change}>
									<div onClick={() => setPaymentActiveTab('cash')} className={paymentActiveTab === 'cash' ? s.active : ''}>Наличными</div>
									<div onClick={() => setPaymentActiveTab('card')} className={paymentActiveTab === 'card' ? s.active : ''}>Картой</div>
								</div>


								{paymentActiveTab === 'cash'
									? <div className={s.money}>
										<div>Подготовить сдачу с</div>
										<Field name='money' placeholder='Сумма'></Field>
									</div>
									:
									<div className={s.money}>
										<div>Наш оператор свяжется с вами</div>
									</div>
								}
								<div className={s.comment}>
									<Field name='comment' placeholder='Комменатрий к заказу'></Field>
								</div>
							</div>
							<div className={s.getting}>

								<div className={s.howGet}>
									<div onClick={() => setDeliveryActiveTab('courier')} className={deliveryActiveTab === 'courier' ? s.active : ''}>Курьером</div>
									<div onClick={() => setDeliveryActiveTab('pickup')} className={deliveryActiveTab === 'pickup' ? s.active : ''}>Самовывоз</div>
								</div>
								{deliveryActiveTab === 'courier'
									? <div className={`${s.address} ${s.grid}`}>
										<Field name='street'
											className={errors.street && touched.street ? `${s.street} ${s.error}` : s.street} placeholder='Улица'></Field>
										<Field name='house'
											className={errors.house && touched.house ? `${s.house} ${s.error}` : s.house} placeholder='Дом'></Field>
										<Field name='apartment' className={s.apartment} placeholder='Кв'></Field>
										<Field name='entrance' className={s.entrance} placeholder='Подъезд'></Field>
										<Field name='floor' className={s.floor} placeholder='Этаж'></Field>
										<Field name='code' className={s.code} placeholder='Код'></Field>
									</div>
									: <div className={`${s.address}`}>
										<input disabled value={'Адрес'}></input>

									</div>}

								<div className={s.mail}>
									<Field name='mail' placeholder='E-mail(необязательно)'></Field>
								</div>
							</div>
						</div>
						<button type="submit">Оформить заказ</button>
					</Form>)}
			</Formik>
			<div className={s.info}>
				Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с <a href='#'>Публичной оффертой</a>
			</div>
		</div>

	);
}

export default Payment;