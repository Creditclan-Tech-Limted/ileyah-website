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
      <div className='bg-gray-800 text-white mt-[100px]'>
        <section className="relative py-32">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold lg:leading leading-normal text-6xl lg:text-8xl">Dear Landlords, <br /> Let <span className="text-primary-500">ILEYAH</span> Pay you.</h1>
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