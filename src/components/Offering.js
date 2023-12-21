import React from 'react';

const Offering = () => {
  return (
    <div className='py-20 sm:py-30 lg:py-23 bg-black'>
      <div className='container mx-auto p-4 '>
        <h1 className='text-6xl font-bold tracking-tight text-white sm:text-5xl'>
          What Does Our{' '}
          <span className='text-green-800'> Home to Office Cabs </span> Offering
          Include?
        </h1>

        <div className='grid grid-rows-5 md:grid-rows-1 p-12 grid-flow-col gap-4'>
          <button className=' bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded'>
            Scheduling
          </button>
          <button className='bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded'>
            Routing
          </button>
          <button className='bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded'>
            Billing
          </button>
          <button className='bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded'>
            Safety & Security
          </button>
          <button className='bg-transparent hover:bg-green-800 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded'>
            Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offering;
