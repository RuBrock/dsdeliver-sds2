import './styles.scss';
import { ReactComponent as YoutubeIcon } from '../../assets/images/youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';

const Footer = () => (
    <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="https://www.facebook.com/rubs.brock/" target="_new"> 
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/in/rubens-b-14b266136/" target="_new">
                <LinkedinIcon />
            </a>
            <a href="https://www.instagram.com/rubrock_/" target="_new">
                <InstagramIcon />
            </a>
        </div>
    </footer>
);

export default Footer;