import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import ItemListContainer  from './Components/ItemListContainer/ItemListContainer.jsx';
import CartWidget from './Components/CartWidget/CartWidget.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<ItemListContainer greeting={'Elija su Sneaker'} />} />
				<Route path='/' element={<CartWidget />} />
				<Route path='*' element={<h1> error 404: NOT FOUND </h1>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
