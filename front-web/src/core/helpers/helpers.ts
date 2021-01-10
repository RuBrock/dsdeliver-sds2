import { Product } from "../types/types";

export const checkIsSelected = (selectedProducts: Product[], product: Product) => {
    return selectedProducts.some(item => item.id === product.id);
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    }).format(price);
}