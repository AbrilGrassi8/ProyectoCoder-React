import React, { useState } from 'react';
import './Form.css';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

// const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
// };
const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (userData.name.length < 5) {
			setError(true);
			setErrorMessage('El nombre no puede contener menos de 5 caracteres');
			return;
		}

		const incluye = userData.email.includes('@');

		if (!incluye) {
			setError(true);
			setErrorMessage('el email debe incluir @');
			return;
		}

		const str = userData.password.trim();
		const passwordIsValid = userData.password === str;

		if (!passwordIsValid || userData.password.length < 5) {
			setError(true);
			setErrorMessage('La contraseña debe tener como minimo 5 caracteres');
			return;
		}
		let total = getTotalPrice();
		let order = {
			buyer: userData,
			items: cart,
			total,
		};
		let orderCollection = collection(db, 'orders');
		addDoc(orderCollection, order)
			.then((res) => {
				setOrderId(res.id);
				clearCart();
			})
			.catch((err) => console.log(err));

		cart.map((product) => {
			let refDoc = doc(db, 'products', product.id);
			updateDoc(refDoc, { stock: product.stock - product.quantity });
			return product;
		});
	};

	return (
		<div className='form'>
			<div className='form-container'>
				<form onSubmit={handleSubmit} className='form-input'>
					<input
						type='text'
						placeholder='Nombre'
						value={userData.name}
						onChange={(e) => setUserData({ ...userData, name: e.target.value })}
					/>
					<input
						type='text'
						placeholder='Email'
						value={userData.email}
						onChange={(e) => setUserData({ ...userData, email: e.target.value })}
					/>
					<input
						type='password'
						placeholder='Contraseña'
						value={userData.password}
						onChange={(e) => setUserData({ ...userData, password: e.target.value })}
					/>

					<button type='submit' className='form-button'>
						Comprar
					</button>
				</form>
					<div> {error && <h2>{errorMessage}</h2>}</div>
			</div>
		</div>
	);
};

export default FormCheckout;
