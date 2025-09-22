import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
    return (
    <nav>
        <div>
            <div>
                <Link to="/">eShop</Link>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Search Product"/>
                    <FaSearch></FaSearch>
                </form>
            </div>
        </div>
    </nav>
    );
}

export default Navbar