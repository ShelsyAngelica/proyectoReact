import styles from '../styles/Header.module.css'
import  { useState } from 'react'
import imagen from '../Imagenes/carro-de-la-compra.png'
export const Header = ({allProducts, 
  setAllProducts,
  countProducts, 
  setCountProducts,
  total, 
  setTotal,
    }) => {
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
              allProducts.length ? (
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

export default Header