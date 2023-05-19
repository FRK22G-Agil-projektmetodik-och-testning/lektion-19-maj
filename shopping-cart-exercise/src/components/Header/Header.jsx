import './Header.css';

import Cart from "../Cart/Cart";

function Header(props) {
    return (
        <header>
            <Cart cart={ props.cart } removeFromCart={ props.removeFromCart } /> { /* Skickar vidare cart till Cart */}
        </header>
    )
}

export default Header;