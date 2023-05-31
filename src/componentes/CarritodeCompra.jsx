import styles from '../styles/CarritodeCompra.module.css'
import  { useState,useContext } from 'react'
import imagen from '../Imagenes/carro-de-la-compra.png'
import AppContext from '../context/appContext';
import { Link } from 'react-router-dom'

export const CarritodeCompra = () => {

  const {allProducts} = useContext(AppContext);
  const {setAllProducts} = useContext(AppContext);
  const {total} = useContext(AppContext);
  const {setTotal} = useContext(AppContext);
  const {countProducts} = useContext(AppContext);
  const {setCountProducts} = useContext(AppContext);


  const [active, setActive] = useState(false);
    
  const onDeleteProduct = (product) =>{
       const results = allProducts.filter(
        item => item.id !== product.id
       );
       setTotal(total - product.price * product.quantity);
       setCountProducts(countProducts - product.quantity);
       setAllProducts(results)
  };
    const onClearCart =() => {
         setAllProducts([]);
         setTotal(0);
         setCountProducts(0);

    };



    return (
      <header>
        <div className={styles.containerIcon}>
          <div className="containerCartIcon" onClick={() => setActive(!active)}>
               
            <img src={imagen} className={styles.iconCart} alt="" />
            <div className={styles.countProducts}>
                <span id="contador-productos">{countProducts}</span>
            </div>
          </div>
          <div className={`${styles.containerCartProducts} ${active ? '' : styles.hiddenCart}`}>
            {
              allProducts && allProducts.length ? (
                <>
                	<div className={styles.rowProduct}>
                    {allProducts.map(product => (
                      <div className={styles.cartProduct} key={product.id}>
                        <div className={styles.infoCartProduct}>
                          <span className={styles.cantidadProductoCarrito}>
                            {product.quantity}
                          </span>
                          <p className={styles.tituloProductoCarrito}>
                            {product.nameProduct}
                          </p>
                          <span className={styles.precioProductoCarrito}>
                            ${product.price}
                          </span>
									      </div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className={styles.iconClose}
                          onClick={() => onDeleteProduct(product)}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
										    </svg>
									    </div>
						        ))}
							    </div>

                <div className={styles.cartTotal}>
                    <h3>Total:</h3>
                    <span className={styles.totalPagar}>${total}</span>
                </div>
                
                <Link to={"/login"}><button className={styles.btnClearAll} >Comprar ahora</button></Link>
                <button className={styles.btnClearAll} onClick={onClearCart}>Vaciar Carrito</button>
                
                </>
              )  : (
                <p className={styles.cartEmpty}>El carrito está vacío</p>
              )

           }
               
               
          </div>
      </div>
    </header>)
};

export default CarritodeCompra