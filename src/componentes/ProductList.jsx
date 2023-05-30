import React from 'react';
import { data } from '../data';
import styles from '../styles/productList.module.css'

export const ProductListe = ({allProducts, 
    setAllProducts,
    countProducts, 
    setCountProducts,
    total, 
    setTotal,
}) => {

    const onAddProduct = (product) => {

        if(allProducts.find(item => item.id == product.id)){

            const products = allProducts.map(item => 
                item.id === product.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
                );
                setTotal(total + product.price * product.quantity);
                setCountProducts(countProducts + product.quantity);
                return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        
    };
   
   
    return (
        <div className={styles.containerItems}>
            {data.map(product => (
                <div  className={styles.item} key={product.id}>
                    <figure>
                        <img
                            src={product.urlImage}  />
                    </figure>
                    <div className={styles.infoProduct}>
                        <h2>{product.nameProduct}</h2>
                        <p className={styles.price}>${product.price}</p>
                        <button  onClick={() => onAddProduct(product)} >Añadir al carrito</button> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListe;
