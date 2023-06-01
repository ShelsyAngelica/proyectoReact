import React, { useState } from 'react';
import stylo from '../styles/Contactanos.module.css'
import Iframe from 'react-iframe'

const Contactanos = () => {
    const [name, setName] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones con los datos
      console.log('Nombre:', name);
      console.log('Telefono:', telefono);
      console.log('Email:', email);
      console.log('Mensaje:', message);
      // También puedes reiniciar los campos del formulario si lo deseas
      setName('');
      setTelefono('');
      setEmail('');
      setMessage('');
    };
  
    return (
        
        
     <div className={stylo.Contenedor} > 
    
      <div className={stylo.Formulario}>
        
        <form onSubmit={handleSubmit}>
          <div>
          <h2>Contátenos</h2>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Telefono">Telefono:</label>
            <input
              type="number"
              id="name"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

        <div  className={stylo.Mapa}>
        
            {/* <img className={stylo.Mapa} src={imagen} alt="" /> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22435.90606709845!2d-75.57764412889473!3d6.244570813285806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1685504716609!5m2!1ses!2sco" width="600" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22435.90606709845!2d-75.57764412889473!3d6.244570813285806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1685504716609!5m2!1ses!2sco"
            width="600" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

            <div className={stylo.containerInfo}>
                <p className={stylo.Letra} >Dirección: Calle 51 # 81B - 22 Medellín - Colombia</p>
                <p className={stylo.Letra}>Correo: mejorventas@ventas.com.co</p>
                <p className={stylo.Letra}>Telefono: 604000000 </p>
                <p className={stylo.Letra}>Celular: 304000000 </p>
            </div>
        </div>

        

    </div>  
    );
  };
  
  export default Contactanos;
