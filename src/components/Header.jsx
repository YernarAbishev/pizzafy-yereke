import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {  
  return (
    <header className="header">
        <div className="container d-flex align-items-center space-between">
            <span className="logo"><img src={ logo } alt="Logo" /> Pizzafy</span>
            <ul className="nav">
                <li className="nav__list">
                    <FontAwesomeIcon icon={faUser} />
                </li>
                <li className="nav__list">
                    <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li className="nav__list">
                    <FontAwesomeIcon icon={faMoon} />
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header;
