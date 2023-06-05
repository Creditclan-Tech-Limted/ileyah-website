import React from 'react'
import Collapsible from "@/components/global/Collapsible";

const faqs = [
  {
    q: 'What does Ileyah do?',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How many plans are available?',
    a: (
      <>
        The customer is presented with 3 plans to select from.
      </>
    )
  },
  {
    q: 'How many percent of the total item amount makes up the equity contribution?',
    a: (
      <>
        The equity contribution is 25%?
      </>
    )
  },
  {
    q: 'What makes up the upfront payment?',
    a: (
      <>
        3 months payment & 5% management fee?
      </>
    )
  },
  {
    q: 'Does the customer pay for the apartment inspection?',
    a: (
      <>
        No, Ileyah covers the cost of the inspection.?
      </>
    )
  }
];

const FAW = () => {
  return (
    <>
      <div className="bg-[#F9FAFD] py-20 md:pt-10 md:pb-32">
        <div className="container">
          {/* <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider text-left">
            COMMON QUESTIONS
          </h5> */}
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg">
            Get quick answers to all your questions and concerns about Ileyah and Ileyah homes.<br/> Whether as a
            member, host or just a visitor, we will have an answer waiting for you.
          </p>
          <div className="space-y-4 lg:col-span-7 mt-16">
            {
              faqs.map(faq => (
                <div key={ faq.q } className="border border-slate-200 rounded-xl">
                  <Collapsible
                    header={ (
                      <h5 className="md:text-lg font-medium">
                        { faq.q }
                      </h5>
                    ) }
                    content={ (
                      <div className="opacity-80 pb-6 px-6">
                        { faq.a }
                      </div>
                    ) }
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FAW;
