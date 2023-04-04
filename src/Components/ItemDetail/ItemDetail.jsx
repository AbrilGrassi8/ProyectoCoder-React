import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
	return (
		<Card className='itemCardDetail' style={{ width: '50rem' }}>
			<Card.Img variant='top' style={{ height: '35rem', objectFit: 'cover' }} src={productSelected.img} />
			<Card.Body>
				<Card.Title>{productSelected.title}</Card.Title>
				<Card.Text> {productSelected.description}</Card.Text>
				<h2 style={{ fontFamily: 'monospace' }}>
					<span style={{ fontSize: '26px' }}>Precio:</span> US${productSelected.price}
				</h2>
				<ItemCount stock={productSelected.stock} onAdd={onAdd} initial={quantity} />
			</Card.Body>
		</Card>
	);
};

export default ItemDetail;
