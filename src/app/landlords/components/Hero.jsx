import Button from "@/components/global/Button"
import useSignupStore from "@/store/signup";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const { data, updateData } = useSignupStore((state) => state);


  const handleRegister = async () => {
    try {
      updateData({ user_type: 'agent/landlords' })
      router.push('/register/agents')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <div className="mt-[100px] pt-32 pb-32 md:pt-36 md:pb-36 bg-gray-900 pattern-2 relative rounded-[0_0_1000px_1000px/2%] flex ">
        <div className="container flex-row md:flex my-auto">
          <div className="my-auto">
            <h1 className="text-left max-w-5xl font-display text-7xl md:text-[6.5rem] font-bold leading-[1.2] sm:tracking-tight text-slate-300">Dear <span className='text-primary-600'>Landlords,</span> <br /> let's pay you. <br />
            </h1>
            <p className="mt-8 max-w-2xl text-lg tracking-tight text-slate-400">No more Tenant Palava... Get Paid Now.</p>
            <Button variant='outlined' className='mt-10' color='white' size='lg' onClick={handleRegister}>
              Get started
            </Button>
          </div>
          <div className="my-auto max-w-xl mt-10 md:mt-0">
            <img src="/assets/images/ileyah.gif" alt="" />
          </div>
        </div>
      </div> */}

      <div className='bg-gray-800 text-white mt-[100px]'>
        <section className="relative py-32">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold lg:leading leading-normal text-6xl lg:text-8xl">Dear Landlords, <br /> Let's <span className="text-primary-500">ILEYAH</span> Pay you.</h1>
                {/* <p className="text-slate-400 mx-auto text-xl max-w-xl my-8">Even if your house is empty, ILEYAH will pay.</p> */}
                {/* <div className="subcribe-form relative z-10">
                  <form className="relative max-w-2xl mx-auto">
                    <input type="name" id="search_name" name="name" className="rounded-full bg-white  shadow  ps-12" placeholder="City, Address, Zip :" />
                    <button type="submit" className="btnn bg-yellow-400 text-black rounded-full">Search</button>
                  </form>
                </div> */}
              </div>
              <div className="relative mt-20">
                <img src="/assets/images/ten.jpeg" className="rounded-xl shadow-md dark:shadow-gray-700 w-full" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero;