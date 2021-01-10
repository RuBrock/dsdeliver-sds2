import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from '../../core/types/types';
import { fetchProducts } from '../../core/utils/api';
import './styles.scss';
import StepsHeader from './components/Header/StepsHeader';
import ProductsList from './components/Products/ProductsList';
import OrderLocation from './components/Location/OrderLocation';

const Orders = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(resp => setProducts(resp.data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
        </div>
    );
}
export default Orders;