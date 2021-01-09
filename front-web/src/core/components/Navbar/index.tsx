import './styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="main-navbar">
        <Logo />
        <Link to="/" className="logo-text">DS Delivery</Link>
    </nav>
);

export default Navbar;