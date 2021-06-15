import React, { useState, useEffect } from 'react';

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

    for (let i = 0; i < 8; i++) {
      firstItems.push(items[i]);
    }

    setItems(firstItems);
  };
  return (
    <>
      <main className='container mx-auto py-12 '>
        <h2>Our Products</h2>
        <section className='grid grid-cols-4 gap-5'>
          {items.map((item) => (
            <article
              key={item.id}
              className='flex flex-col h-80 rounded-2xl hover:shadow-lg items-center justify-center text-center p-5'
            >
              <img src={item.image_link} alt={item.name} />
              <div className='font-semibold'>{item.name}</div>
              <div>$ {item.price}</div>
              <div>{item.rating}</div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Products;
