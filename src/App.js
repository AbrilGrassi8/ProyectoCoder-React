import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import CartContextProvider from "./context/CartContext";
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import FormCheckout from './Components/FormCheckout/FormCheckout.jsx';


function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:categoryId' element={<ItemListContainer />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/formulario' element={<FormCheckout />} />

					<Route path='*' element={<h1> error 404: NOT FOUND </h1>} />
				</Routes>
				<Footer />
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
