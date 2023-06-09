'use client'
import { useSignUpMutation } from "@/api/rent"
import Button from "@/components/global/Button"
import Input from "@/global/Input"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form"

const Page = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const { mutateAsync: send, isLoading } = useSignUpMutation()

  const onSubmit = async (data) => {
    try {
      const res = await send(data);
      if (res.data.status) {
        router.push('/login')
      }
    } catch (error) {
      console.log(error?.response?.data?.status, error.response?.data?.message);
      if (!error?.response?.data?.status && error?.response?.data?.message.includes('User already exist')) {
        console.log('route to forgot password');
      }
    }
  }

  return (
    <>
      <div
        className="g-6 flex h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div
            className="block bg-gray-50 shadow-lg h-screen text-black">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div className="px-4 md:px-0 lg:w-8/12 my-auto text-left mx-auto">
                <div className="md:p-12 max-w-xl mx-auto">
                  <div className="text-center">
                    <img
                      className="w-48 mx-auto"
                      src="/assets/images/ileyah-logo.png"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1">
                      Sign up to continue
                    </h4>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <Input label='Phone Number' bordered {...register('phone', {
                        required: {
                          value: true,
                          message: 'Phone number is required'
                        }
                      })} error={errors?.phone?.message} />
                    </div>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <Input label='Passsword' bordered {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is required'
                        }
                      })} error={errors?.password?.message} />
                    </div>
                    <div className="mb-12 pb-1 pt-1 flex justify-between">
                      <Button type='submit' loading={isLoading}>Log in</Button>
                      <div className="mt-2">Forgot password?</div>
                    </div>
                    <div className="flex items-center pb-6">
                      <p className="mb-0 mr-2">Already have an account?</p>
                      <Link href='/login'>
                        <p>Login</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="flex items-center hidden sm:block rounded-b-lg lg:w-4/12 h-screen bg-cover bg-[70%]" style={{ backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/57ab5a96893fc0d6eb45155c/1612477205306-97NIAJL9357XNLBQMSPN/SHIBA_blackfamily.png)' }}>
                <div className="px-4 py-6  md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                  </h4>
                  <p className="text-sm"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page