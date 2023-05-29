'use client'
import CountUp from 'react-countup';

const Future = () => {
  return (
    <>
      <div className="md:block pt-[160px] pb-[200px] bg-blue-800 bg-fixed font-dmSans bg-future bg-right relative bg-cover">
        <div>
          <div className="left-0 top-[17%] absolute">
            <img className="w-[20px]" src="/assets/images/dot1.png" alt="" />
          </div>
          <div className="right-[14%] top-[10%] absolute">
            <img className="w-[20px]" src="/assets/images/dot2.png" alt="" />
          </div>
          <div className="left-[47%] bottom-[20%] absolute">
            <img className="w-[20px]" src="/assets/images/dot3.png" alt="" />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-span-10">
            <h2 className="text-white text-center text-[3rem] md:text-[3.5rem] font-[900] leading-[1.1] relative pb-10">
              Build for the future of <br /> digital Ecommerce
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4">
              <div className="text-center">
                <h2 className="text-[2.5rem] font-[900] text-secondary">
                  <CountUp start={0} duration={5} end={10} />k
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </h2>
                <p className="text-white text-[18px]">Agents</p>
              </div>
              <div className="text-center">
                <h2 className="text-[2.5rem] font-[900] text-secondary">
                  <CountUp start={0} duration={5} end={100} />
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </h2>
                <p className="text-white text-[18px]">Businesses building with Ileyah</p>
              </div>
              <div className="text-center">
                <h2 className="text-[2.5rem] font-[900] text-secondary">
                  <CountUp start={0} duration={5} end={5} />M
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </h2>
                <p className="text-white text-[18px]">Property bought </p>
              </div>
              <div className="text-center">
                <h2 className="text-[2.5rem] font-[900] text-secondary">
                  <CountUp start={0} duration={5} end={10} />M
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </h2>
                <p className="text-white text-[18px]">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Future
