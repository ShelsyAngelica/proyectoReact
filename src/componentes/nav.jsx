import CarritodeCompra from './CarritodeCompra';
import styles from '../styles/Nav.module.css'
import { Link } from 'react-router-dom'
import logo from '../Imagenes/logo.jpg'
import login from '../Imagenes/usuario.png'


const Nav = () => {


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