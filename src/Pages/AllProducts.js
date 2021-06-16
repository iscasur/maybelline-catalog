import React, { useState, useEffect } from 'react';
import CTA from '../Components/CTA';
import { Link } from 'react-router-dom';

function AllProducts() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
    const items = await data.json();

    setItems(items);
  };
  return (
    <>
      <main className='relative container mx-auto py-12 '>
        <header className='flex justify-between items-center'>
          <h2>Our Products</h2>
          <div className=''>
            <button className='btn mr-4 active '>All</button>
            <button className='btn'>Best rated</button>
          </div>
        </header>
        <section className='grid grid-cols-4 gap-5'>
          {items.map((item) => (
            <Link to={`/products/${item.id}`} title={item.name}>
              <article
                key={item.id}
                className='flex flex-col h-80 rounded-2xl hover:shadow-lg items-center justify-center text-center p-5'
              >
                <img src={item.image_link} alt={item.name} />
                <div className='font-semibold'>{item.name}</div>
                <div>$ {item.price}</div>
                <div>{item.rating}</div>
              </article>
            </Link>
          ))}
        </section>
      </main>
      <CTA />
    </>
  );
}

export default AllProducts;
