import React from 'react';

function ProductListed() {
  return (
    <>
      <section className='container mx-auto py-12 grid grid-cols-3 gap-5'>
        <div>
          <h4>New products</h4>
        </div>
        <div>
          <h4>Featured products</h4>
        </div>
        <div>
          <h4>Top sale</h4>
        </div>
      </section>
    </>
  );
}

export default ProductListed;
