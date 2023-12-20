import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {


    return(
        <div className='nav'>
            <Link to="/" className="navbar-brand">ZOTEX</Link>
            <ul className="nav justify-content-end">

                <li className="nav-item">
                <Link to="/for-him" className="nav-link">
                    FOR HIM
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/for-her" className="nav-link">
                    FOR HER
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/for-child" className="nav-link">
                    FOR CHILD
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/about" className="nav-link">
                    ABOUT
                </Link>
                </li>

                <div className="icon">

                    <li className="nav-icon">
                    <Link to="/cart" className="nav-link">
                        <i class="fa-regular fa-cart-shopping"></i>
                    </Link>
                    </li>

                    <li className="nav-icon">
                    <Link to="/favorites" className="nav-link">
                        <i class="fa-regular fa-heart"></i>
                    </Link>
                    </li>

                </div>
                
                
            </ul>
        </div>
    )
}

export default Nav;