import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Products() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
    const items = await data.json();

    const firstItems = [];

    for (let i = 0; i < 12; i++) {
      firstItems.push(items[i]);
    }

    setItems(firstItems);
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
            <article
              key={item.id}
              className='h-80 rounded-2xl hover:shadow-lg p-5'
            >
              <Link
                to={`/products/${item.id}`}
                title={item.name}
                className='flex flex-col items-center justify-center text-center '
              >
                <img src={item.image_link} alt={item.name} />
                <div className='font-semibold mb-4'>{item.name}</div>
                <div className='text-xl'>$ {item.price}</div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Products;
