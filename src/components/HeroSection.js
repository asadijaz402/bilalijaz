import React, { useState } from 'react';


const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
export const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='bg-black'>
      <div className='relative isolate px-6  lg:px-20'>
        <div className='py-32 sm:py-30 lg:py-23 flex md:flex-row flex-col  '>
          <div className='max-w-2xl'>
            <div className='hidden sm:mb-8 sm:flex '>
              <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Announcing our next round of funding.{' '}
                <a href='#' className='font-semibold text-white'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-left'>
              <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                Data to enrich your online business
              </h1>
              <p className='mt-6 text-lg leading-8 text-white'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 flex  gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div className='center'>
            <img src={'/img/ma.png'} />
          </div>
          <div>
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};
