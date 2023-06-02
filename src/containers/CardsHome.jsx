import React, { useEffect, useState } from 'react';
import styles from '../styles/productList.module.css';
import { data } from '../data';
import AppContext from '../context/appContext';
import { useContext } from 'react';

const CardsHome = () => {
  const { allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts } = useContext(AppContext);
  const [count, setCount] = useState(8);
  const [itemsToShow, setItemsToShow] = useState([]);

  const onAddProduct = (product) => {
    if (allProducts && allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  useEffect(() => {
    setItemsToShow(data.slice(4, count));
  }, [count]);

  return (
    <>
      <div className={styles.containerItems2}>
        {itemsToShow.map((product) => (
          <div className={styles.item} key={product.id}>
            <figure>
              <img src={product.urlImage} alt={product.nameProduct} />
            </figure>
            <div className={styles.infoProduct}>
              <p>{product.nameProduct}</p>
              <p className={styles.price}>${product.price}</p>
              <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.containerButton}>
        <button onClick={() => setCount(count + 4)}>Ver más</button>
      </div>
    </>
  );
};

export default CardsHome;