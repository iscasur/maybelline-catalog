import React from 'react';

import Products from '../Components/Products';
import Cards from '../Components/Cards';
import ProductListed from '../Components/ProductListed';
import CTA from '../Components/CTA';

function Home() {
  return (
    <>
      <Products />
      <Cards />
      <ProductListed />
      <CTA />
    </>
  );
}

export default Home;
