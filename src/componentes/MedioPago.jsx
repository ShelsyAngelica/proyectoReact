import tarjeta from '../Imagenes/tarjeta-de-credito.png'
import banco from '../Imagenes/banco.png'
import efectivo from '../Imagenes/billete-de-banco.png'
import masMedios from '../Imagenes/mas.png'
import style from '../styles/MedioPago.module.css'

const MedioPago = () =>{
    return(
        <>
            <div>
                <div className={style.container}>
                    <div className={style.containerInfo}>
                        <figure>
                            <img className={style.img} src={tarjeta} alt="" />
                        </figure>

                        <div>
                            <p className={style.p}>Hasta 48 cuotas</p>
                            <a href="">Ver más</a>
                        </div>
                    </div>

                    <div className={style.containerInfo}>
                        <figure>
                            <img className={style.img} src={banco} alt="" />
                        </figure>

                        <div>
                            <p className={style.p}>Transferencia tu banco</p>
                            <a href="">Ver más</a>
                        </div>
                    </div>

                    <div className={style.containerInfo}>
                        <figure>
                            <img className={style.img} src={efectivo} alt="" />
                        </figure>

                        <div>
                            <p className={style.p}>Paga en efectivo</p>
                            <a href="">Ver más</a>
                        </div>
                    </div>

                    <div className={style.containerInfo}>
                        <figure>
                            <img className={style.img} src={masMedios} alt="" />
                        </figure>

                        <div>
                            <p className={style.p}>Más medios de pago</p>
                            <a href="">Ver más</a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default MedioPago