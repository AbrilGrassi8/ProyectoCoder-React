import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../productsMock';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import "./itemDetailContainer.css"

const ItemDetailContainer = () => {
	const { id } = useParams();

	const productSelected = products.find((element) => element.id === Number(id));

	const onAdd = (cantidad) => {
		console.log(`se agrego al carrito ${cantidad} productos `);
	};

	return (
		<Card className='itemCardDetail' style={{ width: '30rem' }}>
			<Card.Img variant='top' src={productSelected.img} />
			<Card.Body>
				<Card.Title>{productSelected.name}</Card.Title>
				<Card.Text> {productSelected.description}</Card.Text>
				<ItemCount stock={productSelected.stock} onAdd={onAdd} />
			</Card.Body>
		</Card>
	);
};

export default ItemDetailContainer;
