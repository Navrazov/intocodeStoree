import React from "react";
import Cart from "./cart";
import Intocode from "./intocode";
import './style.modules/header.style.css'

const Header = () => {
    return <div className="header">
        <Intocode />
        <Cart />
    </div>
}

export default Header;