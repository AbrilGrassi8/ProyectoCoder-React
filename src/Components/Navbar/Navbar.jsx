import "./Navbar.css"
import Button from '@mui/material/Button'
import BsFillCartCheckFill from "../CartWidget/CartWidget";

export const Navbar = () => {
  
    return (
        <div className="container-navbar">
            <h2 className="title">NAIKY STORE</h2>
            <ul className="container-classlist"> 
            <li><Button variant="contained">Nike</Button></li>
            <li><Button variant="contained">Adidas</Button></li>
            <li><Button variant="contained">Jordan</Button></li>
            </ul>
            <BsFillCartCheckFill />
        </div>
    );
};
