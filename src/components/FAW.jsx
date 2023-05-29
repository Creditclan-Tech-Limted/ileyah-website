import React from 'react'

const FAW = () => {
  return (
    <>
      <div className="bg-[#F9FAFD] md:pt-24 pt-20 md:pb-32 pb-20 w-full">
        <div className="w-full max-w-[1366px] mx-auto md:px-32 px-7">
          <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary tracking-wider text-left">
            COMMON QUESTIONS
          </h5>
          <h2 className="md:text-[2.5rem] text-3xl text-black font-bold w-full text-left mb-5">
            Frequently asked questions
          </h2>
          <p className="text-sm text-primary w-full">
            Get quick answers to all your questions and concerns about Ileyah and Ileyah homes.<br/> Whether as a member, host or just a visitor, we will have an answer waiting for you.
          </p>
          <a href="/faq" className="block bg-blue-800 text-white text-sm w-40 py-4 rounded-[28px] text-center mt-8 mb-7 hover:text-white">Visit FAQs</a>
          <div>
            <div className="w-full border-b border-solid border-[#E5E6EC] pb-5 mb-9 duration-150 ease-in-out transition-[height]">
              <button aria-controls="collapse58" className="flex itemcenter justify-between w-full">
                <span className="font-bold md:text-lg text-base text-left text-black">How does Ileyah Work?</span>
                <div className="rounded-full w-11 h-11 bg-[#E6E9FB] relative flex-shrink-0">
                  <svg width="12px" height="8px" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto duration-150 rotate-0">
                    <path d="M7.68882 0.896484L4.44695 4.10482L1.20508 0.896484" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </button>
              <div id="collapse58" className="duration-150 ease-in-out mt-9 transition-[height]" style={{ display: 'none' }}>
                <p className="text-sm text-[#4B4F63] mb-4">
                  At Ileyah, we offer access to premium residential solutions with options of daily, monthly and quarterly and biannual subscription. Once you find a space you like, simply create a booking along with  a few details about yourself. This request is then processed within a few hours.
                </p>
                <p className="text-sm text-[#4B4F63]">
                  No payment is taken until the booking is accepted. We will charge you the rent upfront plus a one-off booking fee and security deposit. You will then receive a confirmation email with the details of your new space.
                </p>
              </div>
            </div>
            <div className="w-full border-b border-solid border-[#E5E6EC] pb-5 mb-9 duration-150 ease-in-out transition-[height]">
              <button aria-controls="collapse61" className="flex itemcenter justify-between w-full">
                <span className="font-bold md:text-lg text-base text-left text-black">Does Ileyah organise viewings?</span>
                <div className="rounded-full w-11 h-11 bg-[#E6E9FB] relative flex-shrink-0"><svg width="12px" height="8px" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto duration-150 rotate-0">
                  <path d="M7.68882 0.896484L4.44695 4.10482L1.20508 0.896484" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                </div>
              </button>
              <div id="collapse61" className="duration-150 ease-in-out mt-9 transition-[height]" style={{ display: 'none' }}><p className="text-sm text-[#4B4F63]">
                Yes.
              </p>
              </div>
            </div>
            <div className="w-full border-b border-solid border-[#E5E6EC] pb-5 mb-9 duration-150 ease-in-out transition-[height]">
              <button aria-controls="collapse64" className="flex itemcenter justify-between w-full">
                <span className="font-bold md:text-lg text-base text-left text-black">Does Ileyah own the spaces listed?</span>
                <div className="rounded-full w-11 h-11 bg-[#E6E9FB] relative flex-shrink-0">
                  <svg width="12px" height="8px" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto duration-150 rotate-0">
                    <path d="M7.68882 0.896484L4.44695 4.10482L1.20508 0.896484" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
              </button>
              <div id="collapse64" className="duration-150 ease-in-out mt-9 transition-[height]" style={{ display: 'none' }}><p className="text-sm text-[#4B4F63]">
                No Ileyah does not own the spaces listed, as we have homeowners that list these spaces on our platform.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAW;