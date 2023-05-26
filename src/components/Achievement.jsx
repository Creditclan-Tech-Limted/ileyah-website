import Link from 'next/link';

const Achievement = () => {
  return (
    <>
      <div className="hidden md:block xl:pt-[25rem] md:pt-[70px] pb-[200px] relative xl:curved-header bg-[#F1F1F8] xl:mt-[-7rem]">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-4 pt-[7rem]">
            <h2 className="text-[3.5rem] font-[900] font-dmSans leading-[1.1] relative">
              Shop from over 10k merchants’ products directly?
            </h2>
            <p className="font-dmSans text-[18px] py-10">
              Access our nice widget here at shop.lyncs.co
            </p>
            <Link href="/register" className="bg-black text-[18px] text-white px-8 py-4 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              Get started
            </Link>
          </div>
          <div className="col-start-7 col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="min-h-[250px] mb-[3rem] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/assets/images/3.jpg"
                  alt=""
                />
                <div className="inset-0 absolute bg-gradient opacity-[0.4] rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="font-pacifico text-[18px] py-2">Seun Stores</p>
                  <p className="font-pacifico text-[18px]">Footwears</p>
                </div>
              </div>
              <div className="min-h-[250px] mt-[4rem] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/assets/images/2.jpg"
                  alt=""
                />
                <div className="inset-0 absolute bg-gradient opacity-[0.4] rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="font-pacifico text-[18px] py-2">
                    Aurora Stores
                  </p>
                  <p className="font-pacifico text-[18px]">Fashion</p>
                </div>
              </div>
              <div className="min-h-[250px] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/assets/images/1.jpg"
                  alt=""
                />
                <div className="inset-0 absolute bg-gradient opacity-[0.4] rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="font-pacifico text-[18px] py-2">
                    Emmanuel Stores
                  </p>
                  <p className="font-pacifico text-[18px]">Phones</p>
                </div>
              </div>
              <div className="min-h-[250px] mt-[2rem] relative">
                <img
                  className="w-full object-cover rounded-[24px]"
                  src="/assets/images/4.jpg"
                  alt=""
                />
                <div className="inset-0 absolute bg-gradient opacity-[0.4] rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="font-pacifico text-[18px] py-2">
                    Shirley Stores
                  </p>
                  <p className="font-pacifico text-[18px]">Furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-[160px]">
          <div className="col-start-2 col-span-10 bg-black p-10 rounded-lg">
            <h2 className="text-white text-[2.5rem] font-[900] font-dmSans leading-[1.1] relative">
              Connect today
            </h2>
            <div className="grid grid-cols-2">
              <p className="font-dmSans text-[18px] py-5 text-white">
                Get 100 free API calls when you sign up
              </p>
              <div className="ml-auto">
                <Link href="/register" className="bg-white text-[18px] text-black px-4 py-2 rounded-lg font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievement;