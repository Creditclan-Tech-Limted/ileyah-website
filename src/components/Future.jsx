'use client'
import CountUp from 'react-countup';

const Future = ({ source }) => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto bg-gray-900 pattern-1 text-white rounded-3xl text-center py-28">
        <div className="container flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Simplifying tenancy deals across Africa. One rent installments at a time.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-28 w-full">
            <div className="text-center">
              <h2 className="text-5xl font-[900] text-primary-700">
                &#8358;
                <CountUp start={0} duration={5} end={100} />M+
              </h2>
              <p className="text-white opacity-75">in Funding </p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-[900] text-primary-700">
                <CountUp start={0} duration={5} end={10} />k+
              </h2>
              <p className="text-white opacity-75">Properties</p>
            </div>
            <div className="text-center mt-14 md:mt-0">
              <h2 className="text-5xl font-[900] text-primary-700">
                <CountUp start={0} duration={5} end={12} />K+
              </h2>
              <p className="text-white opacity-75"> {source === 'company' ? 'Employees' : 'Tenants'} </p>
            </div>
            <div className="text-center mt-14 md:mt-0">
              <h2 className="text-5xl font-[900] text-primary-700">
                <CountUp start={0} duration={5} end={5} />K+
              </h2>
              <p className="text-white opacity-75">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future;