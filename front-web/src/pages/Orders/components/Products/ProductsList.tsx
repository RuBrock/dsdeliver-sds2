import { checkIsSelected } from "../../../../core/helpers/helpers";
import { Product } from "../../../../core/types/types";
import ProductCard from "./ProductCard"

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

const ProductsList = ({ products, onSelectProduct, selectedProducts }: Props) => {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">

                {
                    products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            onSelectProduct={onSelectProduct}
                            isSelected={checkIsSelected(selectedProducts,product)}
                        />
                    ))
                }

            </div>
        </div>
    );
}

export default ProductsList;