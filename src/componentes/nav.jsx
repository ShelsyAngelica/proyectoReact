import CarritodeCompra from './CarritodeCompra';
import styles from '../styles/Nav.module.css'
import { Link } from 'react-router-dom'
import logo from '../Imagenes/logo.jpg'
import login from '../Imagenes/usuario.png'
import { useState } from 'react';


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

    // Función para cambiar el estado del menú hamburguesa
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <nav className={styles.nav} id='menu'>
        <div className={styles.div}>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        <ul className={styles.ul}>
        <Link to={"/"}><li className={styles.li}>HOME</li></Link>  
        <Link to={"/contactenos"} ><li className={styles.li} >CONTACTANOS</li></Link>
        <Link to={"/productos"}><li className={styles.li} >PRODUCTOS</li></Link>
        <li className={styles.li}><CarritodeCompra/></li>
        <Link to={"/login"}><li><img className={styles.img} src={login} alt="" /></li></Link>
        </ul>
      </nav>


    );
              
    
};
  
  export default Nav;