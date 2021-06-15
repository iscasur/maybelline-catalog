import React from 'react';

function CTA() {
  return (
    <>
      <section className='container mx-auto py-12 grid grid-cols-2 gap-5'>
        <div className='cta gift-card'>
          <h2 className='mb-8'>Gift Certificates</h2>
          <p>Make them happy</p>
        </div>
        <div className='cta subscribe'>
          <h2 className='mb-8'>Subscribe now and save</h2>
          <div className='bg-white w-96 h-12 rounded-3xl flex justify-between items-center'>
            <input
              className='w-full text-gray-dark h-10 rounded-3xl rounded-r-none outline-none pl-6'
              type='text'
              placeholder='Your email'
            />
            <button className='bg-primary-default h-10 rounded-3xl px-6 text-base mr-1 focus:outline-none'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
