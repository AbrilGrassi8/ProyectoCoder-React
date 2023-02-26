import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.min.js"


 
function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting={"Elija su Sneaker"}/>
            <Footer />
        </div>
    );
};

export default App;
