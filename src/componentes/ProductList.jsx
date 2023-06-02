import React from 'react';
import { data } from '../data';
import styles from '../styles/productList.module.css'
import  { useContext } from 'react'
import AppContext from '../context/appContext';

export const ProductListe = () => {

    const {allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts} = useContext(AppContext);

    const onAddProduct = (product) => {

        if(allProducts && allProducts.find(item => item.id == product.id)){

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
                        <p>{product.nameProduct}</p>
                        <p className={styles.price}>${product.price}</p>
                        <button  onClick={() => onAddProduct(product)} >Añadir al carrito</button> 
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListe;
