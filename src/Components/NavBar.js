import React from 'react';
import { FaBars } from 'react-icons/fa';

function Nav() {
  return (
    <>
      <header className='container mx-auto'>
        <nav className='flex justify-between content-center py-4'>
          <h3 className='text-3xl font-semibold tracking-wide self-center'>
            Maybelline
          </h3>
          <section className='flex items-center'>
            <div className='font-bold mr-8'>
              <a href='tel:+528001234567'>(800)123-4567</a>
            </div>
            <input
              className='w-56 bg-gray-light rounded-lg p-2 px-5 mr-8'
              type='text'
              placeholder='Search'
            />
            <button
              className='flex bg-primary-default text-white justify-center rounded-full w-12 h-12'
              aria-label='Button'
            >
              <FaBars className='self-center' />
            </button>
          </section>
        </nav>
      </header>
    </>
  );
}

export default Nav;
