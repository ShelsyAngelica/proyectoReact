import facebook from '../Imagenes/facebook.png'
import instagram from '../Imagenes/instagram.png'
import gmail from '../Imagenes/gmail.png'
import telefono from '../Imagenes/boton-de-simbolo-de-telefono.png'
import whatsapp from '../Imagenes/whatsapp.png'
import style from '../styles/Footer.module.css'

const Footer = () =>{


    return(
        <div className={style.containerDiv}>

            <div className={style.containerA}>
                <div className={style.div}>
                    <a href=''>Sobre nosotros</a>
                    <a href=''>PQR</a>
                    <a href=''>Trabajos</a>
                </div>

                <ul className={style.container}>
                    <li><img className={style.img} src={telefono} alt="" /></li>
                    <li><img className={style.img} src={instagram} alt="" /></li>
                    <li><img className={style.img} src={facebook} alt="" /></li>
                    <li><img className={style.img} src={gmail} alt="" /></li>
                    <li><img className={style.img} src={whatsapp} alt="" /></li>
                </ul>
                
                <div className={style.div}>
                    <a href="">Blog</a>
                    <a href="">Contactanos</a>
                    <a href="">Ayuda</a>
                </div>

            </div>
        </div>
    )
}

export default Footer