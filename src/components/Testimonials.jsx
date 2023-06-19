'use client'
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();
const Testimonials = ({ source }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      // navigation: true,
      speed: 10000,
      spaceBetween: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.8 }
      },
      injectStyles: [`
      .swiper-button-prev {
        background-color: white !important;
        color: black !important;
        width: 20px;
        height: 20px;
      }
      `],
    };
    Object.assign(swiperElRef.current, swiperParams);
    swiperElRef.current.initialize();
  }, []);

  const i_testimonials = [
    {
      id: 1,
      value: 'Using the Ileyah platform made renting so much easier and convenient. No more worrying about upfront payments',
      name: 'Nebs Chwukuma',
      ceo: 'Software Engineer'
    },
    {
      id: 2,
      value: 'Renting has never been this flexible. Thanks to Ileyah, I can choose a payment schedule that suits me.',
      name: 'Jude Hawkson',
      ceo: 'Business Owner'
    },
    {
      id: 3,
      value: 'I love how Ileyah allows me to spread out my rental payments. It helps me manage my budget better.',
      ceo: 'Student',
      name: 'Loveth Chris',
    },
    {
      id: 4,
      value: "Ileyah saved me from financial stress. I could rent what I needed without worrying about immediate payment.",
      ceo: 'Sales Exceutive',
      name: 'Eunice Adama',

    },
    {
      id: 5,
      value: "Thanks to Ileyah, I was able to rent items I wouldn't have been able to afford otherwise. It's a fantastic service.",
      ceo: 'Football Analyst',
      name: "Anita reone"
    },
    {
      id: 6,
      value: "I never thought renting could be this hassle-free until I discovered Ileyah. It's a game-changer for sure.",
      ceo: 'Electricians',
      name: 'Femi Araromi',
    },
    {
      id: 7,
      value: "Ileyah gave me the freedom to choose the rental duration that suited my needs. It's so flexible!",
      ceo: "CEO at Kabu NG",
      name: 'Joseph Francis',
    },
    {
      id: 8,
      value: "Renting through Ileyah was a breeze. The process was quick, and the payment options were convenient.",
      ceo: 'Artichect',
      name: 'Oshimen Abrecei',
    }
  ]

  return (
    <section id="testimonials" aria-label="What our customers are saying" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <h2 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Loved by {source === 'main'? 'Tenants and Landlords.' : source === 'landlords' ? 'Tenants.': source === 'tenants'? 'Tenants.' : ''} 
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            At Ileyah, we've developed a revolutionary Fintech solution that allows you to split your payments and make
            real estate ownership more accessible and manageable. With our Split Payments service, you can take a step
            towards your dream home without the burden of immediate full payment
          </p>
        </div>
      </div>
      <div className="mt-20">
        <swiper-container ref={swiperElRef} init={false}>
          {
            i_testimonials.map((item, i) => {
              return <swiper-slide key={i}>
                <div className='mx-3'>
                  <figure className="relative rounded-3xl bg-white shadow-md px-10 py-14">
                    <svg aria-hidden="true" width="105" height="78"
                      className="absolute bottom-6 left-10 -scale-90 fill-blue-900/5">
                      <path
                        d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
                      ></path>
                    </svg>
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900">
                        {item.value}
                      </p>
                    </blockquote>
                    <figcaption
                      className="relative mt-6 flex items-center justify-end pt-3 text-right"
                    >
                      <div>
                        <div className="font-display text-base text-slate-900">{item.name}</div>
                        {source !== 'landlords' && (
                        <div className="mt-1 text-sm text-slate-500">{item.ceo}</div>
                        )}
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50">
                        <img src="" alt="" />
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </swiper-slide>
            })
          }
        </swiper-container>
      </div>
    </section>
  );
};

export default Testimonials;
