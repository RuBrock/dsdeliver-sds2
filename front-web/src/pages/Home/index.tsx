import './styles.scss';
import { ReactComponent as MainImage } from '../../core/assets/images/main.svg';
import Footer from '../../core/components/Footer';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <div className="home-container">
            <div className="home-content">

                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>

                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos minutos levaremoss na sua porta
                    </h3>

                    <Link to="/orders" className="home-btn-order">
                        FAZER PEDIDO
                    </Link>
                </div>

                <div className="home-image">
                    <MainImage />
                </div>

            </div>

        </div>

        <Footer />
    </>
);

export default Home;