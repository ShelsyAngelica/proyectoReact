import styles from '../styles/productList.module.css'
import {data} from '../data'
import AppContext from '../context/appContext';
import { useContext } from 'react';


const CardsHome = () =>{

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

    return(

        <>
          <div className={styles.containerItems}>
            {data.slice(10,14).map(product => (
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
            
        </>
    )
}

export default CardsHome