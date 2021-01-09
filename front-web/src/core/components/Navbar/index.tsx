import './styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Navbar = () => {
    return (
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    );
}

export default Navbar;