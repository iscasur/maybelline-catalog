import React from 'react';

function Footer() {
  return (
    <>
      <footer className='container mx-auto py-12 px-16 grid grid-cols-2 gap-5 bg-gray-default rounded-t-2xl'>
        <section>
          <h5 className='mb-6'>Maybelline</h5>
          <p className='text-sm'>
            305 Evergreen Av. <br />
            New York, 48110 <br />
            United States
          </p>
        </section>
        <section>
          <nav className='grid grid-cols-3 gap-3'>
            <div>
              <h6 className='mb-6'>Follow us</h6>
              <ul className='leading-loose'>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <h6 className='mb-6'>Product</h6>
              <ul className='leading-loose'>
                <li>FAQ</li>
                <li>Terms and conditions</li>
                <li>Refound</li>
              </ul>
            </div>
            <div>
              <h6 className='mb-6'>Abour us</h6>
              <ul className='leading-loose'>
                <li>Careers</li>
                <li>Contact</li>
                <li>Help center</li>
              </ul>
            </div>
          </nav>
        </section>
      </footer>
    </>
  );
}

export default Footer;
