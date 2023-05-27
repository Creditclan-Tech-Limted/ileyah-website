import React from 'react';

const Jottings = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute h-[300px] w-[300px] bg-[#F4BD68] rounded-full left-[7rem]">
                    <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#86B5B8] after:top-[4rem] after:border-2 after:border-white rotate'></div>
                </div>
                <div className="absolute h-[300px] w-[300px] bg-[#EE6C4C] rounded-full right-[3rem] top-[10rem]">
                    <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#F4BD68] after:top-[4rem] after:border-2 after:border-white rotate animation-duration-8'></div>
                </div>
                <div className="absolute h-[150px] w-[150px] bg-[#88B6B9] rounded-full bottom-[-4rem] left-[9rem]">
                    <div className='relative h-[150px] w-[150px] rounded-full after:content-[""] after:absolute after:h-[25px] after:w-[25px] after:rounded-full after:bg-[#ED6B49] after:top-[6rem] after:border-2 after:border-white rotate animation-delay-3'></div>
                </div>
                <div className="z-[99] relative">
                    <div className="absolute bg-gray-100 h-[470px] w-[250px] rounded-lg top-[3rem] right-[7rem] shadow-md p-4 bounce">
                        <svg
                            className="w-[7px]"
                            fill="#333"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                        >
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg>
                        <div className="py-6">
                            <p className="text-base md:text-lg text-gray-600 font-bold">
                                Credibiity analysis
                            </p>
                            <p className="md:text-sm text-gray-600 pb-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card ">
                                <img className="mx-auto" src="/images/face-one.png" alt="" />
                                <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                                    Bukunmi Dimeji.
                                </p>
                                <p className="md:text-sm text-gray-600 pb-2">
                                    Head writer at the cable
                                </p>
                                <svg
                                    className="w-[30px] mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </div>
                            <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-two">
                                <img className="mx-auto" src="/images/face-two.png" alt="" />
                                <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                                    Bukunmi Dimeji.
                                </p>
                                <p className="md:text-sm text-gray-600 pb-2">
                                    Head writer at the cable
                                </p>
                                <svg
                                    className="w-[30px] mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </div>
                            <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-three">
                                <img className="mx-auto" src="/images/face-three.png" alt="" />
                                <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                                    Bukunmi Dimeji.
                                </p>
                                <p className="md:text-sm text-gray-600 pb-2">
                                    Head writer at the cable
                                </p>
                                <svg
                                    className="w-[30px] mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </div>
                            <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-four">
                                <img className="mx-auto" src="/images/face-four.png" alt="" />
                                <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                                    Bukunmi Dimeji.
                                </p>
                                <p className="md:text-sm text-gray-600 pb-2">
                                    Head writer at the cable
                                </p>
                                <svg
                                    className="w-[30px] mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-black text-sm text-white px-4 py-2 rounded-[12px] font-dmSans">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jottings;