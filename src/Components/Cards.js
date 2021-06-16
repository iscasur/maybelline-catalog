import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>
      <aside className='container mx-auto py-12 grid grid-cols-3 gap-5'>
        <Link to='/terms#free-shipping' title='Learn more about free shipping'>
          <section className='card free-shipping'>
            <div className='font-heading text-3xl'>Free shipping</div>
            <div>For all order over $100</div>
            <div className='absolute bottom-8 underline'>Learn more</div>
          </section>
        </Link>
        <Link to='/products' title='See all our products'>
          <section className='card our-products'>
            <div className='font-heading text-3xl'>Our products</div>
            <div>See all our products</div>
            <div className='absolute bottom-8 underline'>Learn more</div>
          </section>
        </Link>
        <section className='card news'>
          <div className='font-heading text-3xl'>What’s News</div>
          <div>Shop our new arrivals</div>
          <div className='absolute bottom-8'>
            <a
              className='underline'
              title="Learn more about what's news"
              href='news'
            >
              Learn more
            </a>
          </div>
        </section>
      </aside>
    </>
  );
}

export default Cards;
