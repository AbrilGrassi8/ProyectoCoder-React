import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<Link to='/cart'>
			<div className='container-cart'>
				<BsFillCartCheckFill
					style={{
						fontSize: '2rem',
						color: '#e1d4c7',
					}}
				/>
				<div className='bubble-counter'>
					<span>0</span>
				</div>
			</div>
		</Link>
	);
};

export default CartWidget;
