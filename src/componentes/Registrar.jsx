import React from 'react';
import stylo from '../styles/Registrar.module.css';

const Registrar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombreApellido = document.getElementById('nombreapellido').value;
    const correoElectronico = document.getElementById('correoelectronico').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const password = document.getElementById('password').value;
    const repetirPassword = document.getElementById('repetir').value;
    const recibirNovedades = document.getElementById('recibirNovedades').checked;

    // Imprimir los datos por consola
    console.log('Nombre y Apellido:', nombreApellido);
    console.log('Correo Electrónico:', correoElectronico);
    console.log('Teléfono:', telefono);
    console.log('Dirección:', direccion);
    console.log('Contraseña:', password);
    console.log('Repetir Contraseña:', repetirPassword);
    console.log('Recibir Novedades:', recibirNovedades);
  };

  return (
    <>
      <div className={stylo.Contenedor}>
        <div className={stylo.Formulario}>
          <form onSubmit={handleSubmit}>
            <h2>Registro de clientes nuevos</h2>
            <label htmlFor="nombreapellido">Nombre y Apellido</label>
            <input
              type="text"
              id="nombreapellido"
              className="input-padron"
              required
              placeholder="Juancito Molina"
            />

            <label htmlFor="correoelectronico">Correo Electrónico</label>
            <input
              type="email"
              id="correoelectronico"
              className="input-padron"
              required
              placeholder="email@dominio.com"
            />

            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              className="input-padron"
              required
              placeholder="(XX) XXXX XXXX"
            />

            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              className="input-padron"
              required
              placeholder="calle ##"
            />

            <label htmlFor="password">Digite su nueva contraseña</label>
            <input
              type="password"
              id="password"
              className="input-padron"
              required
              placeholder="(XX) XXXX XXXX"
            />

            <label htmlFor="repetir">Repetir su nueva contraseña</label>
            <input
              type="password"
              id="repetir"
              className="input-padron"
              required
              placeholder="(XX) XXXX XXXX"
            />

            <label className="checkbox">
              <input type="checkbox" id="recibirNovedades" />
              ¿Le gustaría recibir novedades?
            </label>

            <input type="submit" value="REGISTRAR" className="enviar" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrar;