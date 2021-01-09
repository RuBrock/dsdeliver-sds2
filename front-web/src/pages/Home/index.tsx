import './styles.scss';
import { ReactComponent as MainImage } from '../../core/assets/images/main.svg';
import Navbar from '../../core/components/Navbar';
import Footer from '../../core/components/Footer';

const Home = () => (
    <>
        <Navbar />
        
        <div className="home-container">
            <div className="home-content">

                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>

                    <h3 className="home-subtitle">
                        Escolha o seu pedido e em poucos minutos levaremoss na sua porta
                    </h3>

                    <a href="orders" className="home-btn-order">
                        FAZER PEDIDO
                    </a>
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