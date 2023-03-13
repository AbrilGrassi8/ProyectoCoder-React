import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import ItemListContainer  from './Components/ItemListContainer/ItemListContainer.jsx';
import Cart from './Components/Cart/Cart.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:categoryId' element={<ItemListContainer />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
				
				<Route path='*' element={<h1> error 404: NOT FOUND </h1>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
