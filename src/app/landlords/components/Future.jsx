'use client'
import CountUp from 'react-countup';

const Future = () => {
  return (
    <div>
      <div className=" text-white bg-future bg-fixed text-center py-28 bg-cover bg-right">
        <div className="container flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold max-w-5xl">
            Simplifying tenancy deals across Africa. One rent installments at a time.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 mt-28 w-full">
            <div className="text-center">
              <h2 className="text-5xl font-[900] text-primary-400">
                <CountUp start={0} duration={5} end={10} />K+
              </h2>
              <p className="text-white">Landlords</p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-[900] text-primary-400">
                <CountUp start={0} duration={5} end={20} />k+
              </h2>
              <p className="text-white">Properties</p>
            </div>
            <div className="text-center mt-10 md:mt-0">
              <h2 className="text-5xl font-[900] text-primary-400">
                <CountUp start={0} duration={5} end={2} />K+
              </h2>
              <p className="text-white">Tenants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future;