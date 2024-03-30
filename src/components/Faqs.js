import React, { useState } from 'react';

export const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      text: "What's the best thing about UAE?",
      answer:
        'There are many great things about UAE, but some of the most popular tourist destinations include the Matterhorn, the Jungfraujoch, and Lake Geneva.',
    },
    {
      text: 'How do you make holy water?',
      answer:
        'The process of making holy water varies depending on the religious tradition. In the Catholic Church, holy water is made by a priest who blesses it with a special prayer. In other traditions, holy water may be made from natural sources such as springs or rivers.',
    },
    {
      text: 'How do you make holy water?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },

    {
      text: 'Whats the best thing about UAE?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      text: 'Whats the best thing about UAE?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      text: 'Whats the best thing about UAE?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      text: 'Whats the best thing about UAE?',
      answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
      text: "What's the best thing about UAE?",
      answer:
        'There are many great things about UAE, but some of the most popular tourist destinations include the Matterhorn, the Jungfraujoch, and Lake Geneva.',
    },
    // ... remaining questions and answers
  ];
  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div className='bg-black p-8'>
      <div className='container mx-auto p-4 '>
        <h1 className='text-2xl font-bold mb-8 text-white underline '>
          Frequently <span className='text-green-800'>Asked</span> Questions
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {questions.map((question, index) => (
            <div key={index} className='mb-4'>
              <button
                className='flex items-center justify-between font-bold text-lg text-primary mb-2 cursor-pointer text-white'
                onClick={() => handleQuestionClick(index)}
              >
                {question.text}
                {openQuestion === index ? (
                  <svg
                    width='25px'
                    height='25px'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#ffffff'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <rect
                        x='0'
                        fill='none'
                        width='24'
                        height='24'
                      ></rect>{' '}
                      <g>
                        {' '}
                        <path d='M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586'></path>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                ) : (
                  <svg
                    width='25px'
                    height='25px'
                    viewBox='-1.44 -1.44 26.88 26.88'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#ffffff'
                    stroke='#ffffff'
                    stroke-width='0.00024000000000000003'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke='#CCCCCC'
                      stroke-width='0.384'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <rect
                        x='0'
                        fill='none'
                        width='24'
                        height='24'
                      ></rect>{' '}
                      <g>
                        {' '}
                        <path d='M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586'></path>{' '}
                      </g>{' '}
                    </g>
                  </svg>
                )}
              </button>
              {openQuestion === index && (
                <p className='text-base text-white'>{question.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
