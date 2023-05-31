import React from 'react';
import ProductList from '../componentes/Carrusel';
import MedioPago from '../componentes/MedioPago';
import CardsHome from './CardsHome';
import Title from '../componentes/Title';

const Home = () => {
    return (
        <>
            <ProductList/>
            <MedioPago/>
            <Title/>
            <CardsHome/>
        </>
        
    );
}

export default Home;