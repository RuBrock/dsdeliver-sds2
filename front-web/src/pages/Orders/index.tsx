import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from '../../core/types/types';
import { fetchProducts, saveOrder } from '../../core/utils/api';
import { toast } from 'react-toastify';
import './styles.scss';
import StepsHeader from './components/Header/StepsHeader';
import ProductsList from './components/Products/ProductsList';
import OrderLocation from './components/Location/OrderLocation';
import OrderSummary from './components/Summary/OrderSummary';
import Footer from '../../core/components/Footer';
import { checkIsSelected } from '../../core/helpers/helpers';

const Orders = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(resp => setProducts(resp.data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload).then((resp) => {
            toast.error(`Pedido enviado com sucesso! Nº ${resp.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido.');
            })
    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation
                    onChangeLocation={location => setOrderLocation(location)}
                />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    );
}
export default Orders;