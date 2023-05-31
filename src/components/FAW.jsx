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
    q: 'How old is Ileyah?',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How do I request for Infographics?',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How do I follow Ileyah on social media',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How credible are the infographics provided from Ileyah',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How do I request for Ileyah to analyze my data',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'How can I subscribe to the newsletter',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  },
  {
    q: 'Is Ileyah a Nigerian company?',
    a: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum, id magni qui veniam voluptas! Corporis ea
        illum quia tempore?
      </>
    )
  }
];

const FAW = () => {
  return (
    <>
      <div className="bg-[#F9FAFD] py-20 md:py-32">
        <div className="container">
          <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider text-left">
            COMMON QUESTIONS
          </h5>
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
