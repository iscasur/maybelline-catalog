import React, { useState, useEffect } from 'react';
import CTA from '../Components/CTA';

function Item({ match }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchItem() {
      const data = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products/${match.params.id}.json`
      );
      const item = await data.json();

      const color = item.product_colors;

      console.log(color);

      setItem(item);
    }
    fetchItem();
  }, [match.params.id]);

  return (
    <>
      <main className='container mx-auto'>
        <article className='grid grid-cols-12 py-12'>
          <section className='col-span-5 flex self-center justify-center'>
            <img src={item.image_link} alt={item.name} title={item.name} />
          </section>
          <section className='col-span-7'>
            <h1 className='mb-4'>{item.name}</h1>
            <div className='mb-6'>Rating: {item.rating}</div>
            <p className='mb-6'>{item.description}</p>
            <div className='text-4xl text-secondary-default mb-6'>
              $ {item.price}
            </div>
            <div>
              <a
                className='bg-primary-default text-white w-72 py-4 rounded-lg inline-block text-center'
                href={item.product_link}
                title='Buy now'
                target='_blank'
                rel='noreferrer'
              >
                Buy now
              </a>
            </div>
          </section>
        </article>
      </main>
      <CTA />
    </>
  );
}

export default Item;
