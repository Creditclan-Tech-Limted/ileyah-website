'use client'
import CountUp from 'react-countup';

const Future = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto bg-gray-900 text-white rounded-3xl text-center py-28">
        <div className="container flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
            Build for the future of <br/> digital Ecommerce
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 mt-20 w-full">
            <div className="text-center">
              <h2 className="text-[2.5rem] font-[900] text-primary-700">
                <CountUp start={ 0 } duration={ 5 } end={ 10 }/>k+
              </h2>
              <p className="text-white opacity-75">Agents</p>
            </div>
            <div className="text-center">
              <h2 className="text-[2.5rem] font-[900] text-primary-700">
                <CountUp start={ 0 } duration={ 5 } end={ 100 }/>+
              </h2>
              <p className="text-white opacity-75">Businesses building with Ileyah</p>
            </div>
            <div className="text-center">
              <h2 className="text-[2.5rem] font-[900] text-primary-700">
                <CountUp start={ 0 } duration={ 5 } end={ 5 }/>M+
              </h2>
              <p className="text-white opacity-75">Property bought </p>
            </div>
            <div className="text-center">
              <h2 className="text-[2.5rem] font-[900] text-primary-700">
                <CountUp start={ 0 } duration={ 5 } end={ 10 }/>M+
              </h2>
              <p className="text-white opacity-75">Customers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Future
