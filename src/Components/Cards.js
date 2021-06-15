import React from 'react';

function Cards() {
  return (
    <>
      <aside className='container mx-auto py-12 grid grid-cols-3 gap-5'>
        <section className='card free-shipping'>
          <h4>Free shipping</h4>
          <p>For all order over $100</p>
          <a className='underline absolute bottom-8' href='/free-shipping'>
            Learn more
          </a>
        </section>
        <section className='card our-products'>
          <h4>Our products</h4>
          <p>See all our products</p>
          <a className='underline absolute bottom-8' href='/our-products'>
            Learn more
          </a>
        </section>
        <section className='card news'>
          <h4>What’s News</h4>
          <p>Shop our new arrivals</p>
          <a className='underline absolute bottom-8' href='news'>
            Learn more
          </a>
        </section>
      </aside>
    </>
  );
}

export default Cards;
