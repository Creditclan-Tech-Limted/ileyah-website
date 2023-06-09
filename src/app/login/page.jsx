'use client'
import { useLoginMutation } from "@/api/rent"
import Button from "@/components/global/Button"
import Input from "@/global/Input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from "react"

const Page = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [error, setError] = useState({
    status: false,
    message: ''
  })

  const { mutateAsync: send, isLoading } = useLoginMutation()

  const onSubmit = async (data) => {
    try {
      const res = await send(data);
      console.log(res.data);
      if (res.data.status) {
        localStorage.setItem('ileyah_token', res?.data?.token)
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error);
      setError({ status: true, message: error?.response?.data?.message })
      reset()
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
              <div
                className="hidden  flex items-center rounded-b-lg lg:w-4/12 h-screen bg-cover bg-[90%] md:block" style={{ backgroundImage: 'url(/assets/images/login.jpg)' }}>
                <div className="px-4 py-6  md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                  </h4>
                  <p className="text-sm"></p>
                </div>
              </div>
              <div className="px-4 md:px-0 lg:w-8/12 my-auto text-left mx-auto">

                <div className="md:p-12 max-w-xl mx-auto">
                  <div className="">
                    <img
                      className="w-48"
                      src="/assets/images/ileyah-logo.png"
                      alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1">
                      Sign in to continue
                    </h4>
                  </div>
                  {error.status && (
                    <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Info</span>
                      <div>
                        <span class="font-medium">{error?.message}</span>.
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative mb-4" data-te-input-wrapper-init>
                      <Input label='Phone' bordered {...register('phone', {
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
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <Link href='/register'>
                        <p>Register</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;