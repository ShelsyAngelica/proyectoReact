import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext '
import stylo from '../../styles/Login.module.css'
import imagen from '../../Imagenes/imgUser.jpg'

import { Link } from 'react-router-dom';

const Login = () => {
  const {currentUser, error, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    logout();
    
  };

  return (
    <div className={stylo.divContainer}>
      {currentUser ? (
        <>
          <p>Bienvenido, {currentUser.username}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <form className={stylo.Contenedor} onSubmit={handleLogin}>
          <img className={stylo.Usuario} src={imagen} alt="" />
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar sesión</button>
          {error && <p>{error}</p>}
          
          <Link className={stylo.a} to={'/registrarse'}>Registrate</Link>
          

         
        </form>
      )}
    </div>
  );
};

export default Login;