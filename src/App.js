import React from 'react';
import Nav from './Components/NavBar';
import Cards from './Components/Cards';
import ProductListed from './Components/ProductListed';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Products from './Components/Products';

function App() {
  return (
    <>
      <Nav />
      <Products />
      <Cards />
      <ProductListed />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
