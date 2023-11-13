"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import axios from "axios";
import { AUTH_ENDPOINT } from "@/api/landlord";
import { useToast } from "@/lib/use-toast";
import Loader from "@/global/Loader";


const Page = () => {
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
 
  const pin1 = useRef(null);
  const pin2 = useRef(null);
  const pin3 = useRef(null);
  const pin4 = useRef(null);
  const pin5 = useRef(null);
  const pin6 = useRef(null);

  const onSubmit = async (data) => {

    try {
      setLoading(true);
    //   const res = await axios.post(AUTH_ENDPOINT.LOGIN(), {
    //     data,
    //   })

    //   if (res.data.status) {
    //     router.push('/login')
    //   }
    //   setLoading(false)

    // test
    setTimeout(() => {
        setLoading(false)
    }, 10000);
    } catch (error) {
      setLoading(false)
      toast.error(error?.response?.data?.message)
    }
  };

  const autoFocus = (e, inputNumber) => {
    e.preventDefault();
    if(isNaN(parseInt(e.target.value))) return

    switch (inputNumber) {
      case 1:
            pin2.current.disabled = false;
            pin2.current.focus()
        return 
      case 2:
            pin3.current.disabled = false;
            pin3.current.focus()
        return 
      case 3:
            pin4.current.disabled = false;
            pin4.current.focus()
        return 
      case 4:
            pin5.current.disabled = false;
            pin5.current.focus()
        return 
      case 5:
            pin6.current.disabled = false;
            pin6.current.focus()
        return 
      case 6:
          if(pin1.current.value  &&
            pin2.current.value  &&
            pin3.current.value &&
            pin4.current.value &&
            pin5.current.value  &&
            pin6.current.value){
                const pin = [ pin1.current.value,
                    pin2.current.value,
                    pin3.current.value,
                    pin4.current.value,
                    pin5.current.value,
                    pin6.current.value].join('')
                    console.log(pin)
                onSubmit(pin)
            }
      default:
        break;
    }


  };

  return (
    <>
      <div className="g-6 flex h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block bg-gray-50 shadow-lg h-screen text-black">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div
                className="hidden  flex items-center rounded-b-lg lg:w-4/12 h-screen bg-cover bg-[90%] md:block"
                style={{ backgroundImage: "url(/assets/images/login.jpg)" }}
              >
                <div className="px-4 py-6  md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold"></h4>
                  <p className="text-sm"></p>
                </div>
              </div>
              <div className="px-4 md:px-0 lg:w-8/12 md:my-auto mt-20 text-left mx-auto">
                <div className="md:p-12 px-4 max-w-xl mx-auto space-y-6">
                  <div className="">
                    <img
                      className="w-48"
                      src="/assets/images/ileyah-logo.png"
                      alt="logo"
                    />
                    <h4 className="pb-1 text-gray-400 mb-4">Verify Email</h4>
                    <h1 className="pb-1 text-gray-600 text-lg">
                      We have sent verification pin to your email. Please
                      enter the pin below
                    </h1>
                  </div>

                {
                    loading ? (

                        <div className="flex items-center justify-center">
                        <span className="mx-auto">
                            <Loader size="2xl"  className="bg-blue-500"/>
                            </span>
                        </div>
                    ) : (
                        <div className=" py-4  rounded-b-lg">
                            <div>
                           
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                                <div className="w-16 h-16 ">
                                    <input
                                    autoFocus
                                    ref={pin1}
                                    onKeyUp={(e) => autoFocus(e, 1)}
                                    className="otpButton"
                                    type="number"
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                <div className="w-16 h-16 ">
                                    <input
                                    ref={pin2}
                                    onKeyUp={(e) => autoFocus(e, 2)}
                                    className="otpButton"
                                    type="number"
                                    disabled
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                <div className="w-16 h-16 ">
                                    <input
                                    ref={pin3}
                                    onKeyUp={(e) => autoFocus(e, 3)}
                                    className="otpButton"
                                    type="number"
                                    disabled
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                <div className="w-16 h-16 ">
                                    <input
                                    ref={pin4}
                                    onKeyUp={(e) => autoFocus(e, 4)}
                                    className="otpButton"
                                    type="number"
                                    disabled
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                <div className="w-16 h-16 ">
                                    <input
                                    ref={pin5}
                                    onKeyUp={(e) => autoFocus(e, 5)}
                                    className="otpButton"
                                    type="number"
                                    disabled
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                <div className="w-16 h-16 ">
                                    <input
                                    ref={pin6}
                                    onKeyUp={(e) => autoFocus(e, 6)}
                                    className="otpButton"
                                    type="number"
                                    disabled
                                    name=""
                                    id=""
                                    max={1}
                                    />
                                </div>
                                </div>
                          
                            </div>
                        </div>
                    )
                }

                


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
