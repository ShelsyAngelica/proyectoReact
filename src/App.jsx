// import { ProductListe } from './componentes/ProductList'
import Nav from './componentes/nav';
import { Route,Routes } from 'react-router-dom';
import Home from './containers/Home';
import  Contactanos from './componentes/Contactanos'
import AppContext from './context/appContext';
import React, { useState } from 'react';
import Productos from './containers/Productos'
import Login from './componentes/Login/Login';
import { AuthProvider } from './componentes/Login/AuthContext ';
import Footer from './componentes/Footer';
import Registrar from './componentes/Registrar';

function App() {
  
  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
  <>
    <AppContext.Provider value={{allProducts,setAllProducts,total,setTotal,countProducts,setCountProducts}}>
    <AuthProvider>
      <Nav/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contactenos' element={<Contactanos/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/registrarse' element={<Registrar/>} />
            
        </Routes>
      <Footer/>
    </AuthProvider>
    </AppContext.Provider>
  </>

  );
}

export default App
