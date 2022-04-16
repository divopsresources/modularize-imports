import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition.js';
import PreviewToken from '../cards/PreviewCard';
import CustomLink from '../components/CustomLink';

function TokenCarousel() {
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const [autorotateTiming] = useState(7000);
  const [items] = useState([
    {
      quote: 'Divops Cloud',
      date: 'Dec 5th, 2021',
      description: 'Divops Cloud',
      link: 'https://divops.cloud',
      // stripeLink: '/post/1964'
    },
    {
      quote: 'Divops Pro',
      date: 'Dec 5th, 2021',
      description: 'Divops Pro',
      link: 'https://divops.pro',
      // stripeLink: '/post/1964'
    },
    {
      quote: 'Preview Cloud',
      year: 'Preview Mode',
      description: 'New to Divops?  Try it out',
      Register: 'Signup',
      link: 'https://preview.divops.cloud',
      // stripeLink: '#'
    },
  ]);

  const testimonials = useRef(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  const stopAutorotate = () => {
    setAutorotate(null);
  };

  const heightFix = () => {
    if (testimonials.current.children[active]) {
      testimonials.current.style.height =
        testimonials.current.children[active].offsetHeight + 'px';
    }
  };

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);

    return () => clearInterval(interval);
  }, [active, autorotate]);

  useEffect(() => {
    heightFix();
  }, [active]);
  /* eslint-disable react-hooks/exhaustive-deps */

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Carousel area */}
          <div className="max-w-5xl mx-auto">
            {/* Carousel */}
            <div className="relative" data-aos="fade-down">
              {/* Testimonials */}
              <div
                className="relative flex items-start z-10 transition-all duration-300 ease-in-out"
                ref={testimonials}
              >
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    appear={true}
                    className="w-full text-center px-12 py-8 mx-4 md:mx-0"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterStart="opacity-0 -translate-y-8"
                    enterEnd="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveStart="opacity-100 translate-y-0"
                    leaveEnd="opacity-0 translate-y-8"
                  >
                    <div className="inline-flex mb-3 mt-3">
                      {/* Twitter icon */}
                      {/* <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 6.1c-1.2.5-2.4.9-3.8 1 1.4-.8 2.4-2.1 2.9-3.6-1.3.8-2.7 1.3-4.2 1.6C25.7 3.8 24 3 22.2 3c-3.6 0-6.6 2.9-6.6 6.6 0 .5.1 1 .2 1.5-5.5-.3-10.3-2.9-13.6-6.9-.6 1-.9 2.1-.9 3.3 0 2.3 1.2 4.3 2.9 5.5-1.1 0-2.1-.3-3-.8v.1c0 3.2 2.3 5.8 5.3 6.4-.6.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.6 3.3 4.5 6.1 4.6-2.2 1.8-5.1 2.8-8.2 2.8-.5 0-1.1 0-1.6-.1 3 1.8 6.5 2.9 10.2 2.9 12.1 0 18.7-10 18.7-18.7v-.8c1.2-1 2.3-2.1 3.2-3.4z" fill="#1DA1F2" fillRule="nonzero" />
                      </svg> */}
                      <PreviewToken />
                    </div>
                    {/* <blockquote className="text-xl md:text-2xl font-medium text-white dark:text-gray-50 mb-4">{item.quote}</blockquote> */}
                    <div className="font-medium text-lg">
                      <cite className="not-italic text-gray-800 dark:text-gray-50">
                        {item.name}
                      </cite>
                      <CustomLink href="{item.link}">
                        <cite className="not-italic text-gray-800 dark:text-gray-50">
                          {item.name}
                        </cite>
                      </CustomLink>
                      {/* <span className="text-gray-200 dark:text-gray-700"> - </span> */}
                      <CustomLink className="text-gray-500 dark:text-gray-400">
                        {item.role}
                      </CustomLink>{' '}
                      <a className="text- hover:underline" href={item.link}>
                        {item.description}
                      </a>
                    </div>
                  </Transition>
                ))}
              </div>

              {/* Skewed borders */}
              <div
                className="absolute inset-0 transform -skew-x-3 border-2 border-gray-400 dark:border-gray-300 pointer-events-none"
                aria-hidden="true"
              ></div>

              {/* Arrows */}
              <div className="absolute inset-0 flex items-center justify-between">
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform -translate-x-2 md:-translate-x-1/2 hover:bg-teal-500 bg-teal-500 bg-opacity-25 dark:bg-opacity-70 dark:hover:bg-opacity-100 dark:bg-ndblue-100 dark:hover:text-white  transition duration-150"
                  onClick={() => {
                    setActive(active === 0 ? items.length - 1 : active - 1);
                    stopAutorotate();
                  }}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text- transition duration-150 "
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                  </svg>
                </button>
                <button
                  className="relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group transform translate-x-2 md:translate-x-1/2 hover:bg-teal-500 bg-opacity-25 bg-teal-500 dark:hover:text-white dark:bg-ndblue-100 dark:bg-opacity-70 dark:hover:bg-opacity-100 transition duration-150"
                  onClick={() => {
                    setActive(active === items.length - 1 ? 0 : active + 1);
                    stopAutorotate();
                  }}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text- transition duration-150 ease-in-out"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TokenCarousel;
