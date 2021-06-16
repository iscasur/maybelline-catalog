import React, { useState, useEffect } from 'react';

function ProductListed() {
  useEffect(() => {
    fetchNewProducts();
    fetchFeaturedProducts();
    fetchTopProducts();
  }, []);
  const [newProducts, setNewProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const fetchNewProducts = async () => {
    const data = await fetch(API_URL);
    const newProducts = await data.json();

    const newProductsSorted = newProducts.sort((a, b) =>
      a.created_at > b.created_at ? 1 : -1
    );

    const firstNewProducts = [];

    for (let i = 0; i < 5; i++) {
      firstNewProducts.push(newProductsSorted[i]);
    }

    setNewProducts(firstNewProducts);
  };

  const fetchFeaturedProducts = async () => {
    const data = await fetch(API_URL + '&rating_less_than=4');
    const featuredProducts = await data.json();

    const firstFeaturedProducts = [];

    for (let i = 0; i < 5; i++) {
      firstFeaturedProducts.push(featuredProducts[i]);
    }

    setFeaturedProducts(firstFeaturedProducts);
  };

  const fetchTopProducts = async () => {
    const data = await fetch(API_URL + '&rating_greater_than=4');
    const topProducts = await data.json();

    const firstTopProducts = [];

    for (let i = 0; i < 5; i++) {
      firstTopProducts.push(topProducts[i]);
    }

    setTopProducts(firstTopProducts);
  };

  return (
    <>
      <section className='container mx-auto py-12 grid grid-cols-3 gap-5'>
        <div>
          <div className='font-heading text-3xl mb-8'>New products</div>
          <ul>
            {newProducts.map((item) => (
              <li key={item.id} className='mb-5'>
                <article className='grid grid-cols-4 gap-5 items-center'>
                  <section className='col-span-1'>
                    <img src={item.image_link} alt={item.name} />
                  </section>
                  <section className='col-span-3'>
                    <div className='font-semibold'>{item.name}</div>
                    <div>$ {item.price}</div>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='font-heading text-3xl mb-8'>Featured products</div>
          <ul>
            {featuredProducts.map((item) => (
              <li key={item.id} className='mb-5'>
                <article className='grid grid-cols-4 gap-5 items-center'>
                  <section className='col-span-1'>
                    <img src={item.image_link} alt={item.name} />
                  </section>
                  <section className='col-span-3'>
                    <div className='font-semibold'>{item.name}</div>
                    <div>$ {item.price}</div>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className='font-heading text-3xl mb-8'>Top sale</div>
          <ul>
            {topProducts.map((item) => (
              <li key={item.id} className='mb-5'>
                <article className='grid grid-cols-4 gap-5 items-center'>
                  <section className='col-span-1'>
                    <img src={item.image_link} alt={item.name} />
                  </section>
                  <section className='col-span-3'>
                    <div className='font-semibold'>{item.name}</div>
                    <div>$ {item.price}</div>
                  </section>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductListed;
