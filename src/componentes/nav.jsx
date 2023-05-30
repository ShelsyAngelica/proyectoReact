import React from 'react';
import Header from './Header';
import styles from '../styles/Nav.module.css'


const Nav = ({ allProducts, setAllProducts, total, setTotal,countProducts, setCountProducts }) => {
    return (
      <nav className={styles.nav}>
        <div className={styles.div}>
          <p className={styles.p}>logo</p>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>Home</li>
          <li className={styles.li} >Perfil</li>
          <li className={styles.li} >Productos</li>
          <li className={styles.li}>
            <Header
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          </li>
          
        </ul>
      </nav>
    );
  };
  
  export default Nav;