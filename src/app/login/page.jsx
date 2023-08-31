'use client'
import { useLoginMutation } from '@/api/rent'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useSignupStore from '@/store/signup'
import axios from 'axios'
import { AUTH_ENDPOINT } from '@/api/landlord'
import { useToast } from '@/lib/use-toast'

const Page = () => {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState({
    status: false,
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const { data, updateData } = useSignupStore((state) => state)
  const { mutateAsync: send, isLoading } = useLoginMutation()

  const onSubmit = async (data) => {
    try {
      // const res = await send(data);
      const res = await axios.post(AUTH_ENDPOINT.LOGIN(), { ...data })
      setLoading(true)
      console.log(res.data, 'data.id')
      console.log(res.data.data.id, 'data.id')
      if (res.data.status) {
        localStorage.setItem('ileyah_token', res?.data?.token)
        localStorage.setItem('userId', res?.data?.data?.id)
        updateData({ user: res?.data?.message, token: res?.data?.token })
        if (res?.data?.data?.user_type === 'agent/landlords') {
          toast.success(response.data.message)
          return router.push('/dashboard/landlords')
        } else if (res?.data?.data?.user_type === 'companies') {
          toast.success(response.data.message)
          router.push('/dashboard/companies')
        } else {
          toast.error('error')
          router.push('/dashboard')
        }
      }
    } catch (error) {
      // console.log(error)
      setError({ status: true, message: error?.response?.data?.message })
      toast.error(error?.response?.data?.message)
      reset()
    }
  }

  return (
    <>
      <div className='g-6 flex h-screen flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
        <div className='w-full'>
          <div className='block bg-gray-50 shadow-lg h-screen text-black'>
            <div className='g-0 lg:flex lg:flex-wrap'>
              <div
                className='hidden  flex items-center rounded-b-lg lg:w-4/12 h-screen bg-cover bg-[90%] md:block'
                style={{ backgroundImage: 'url(/assets/images/login.jpg)' }}
              >
                <div className='px-4 py-6  md:mx-6 md:p-12'>
                  <h4 className='mb-6 text-xl font-semibold'></h4>
                  <p className='text-sm'></p>
                </div>
              </div>
              <div className='px-4 md:px-0 lg:w-8/12 md:my-auto mt-20 text-left mx-auto'>
                <div className='md:p-12 max-w-xl mx-auto'>
                  <div className=''>
                    <img
                      className='w-48'
                      src='/assets/images/ileyah-logo.png'
                      alt='logo'
                    />
                    <h4 className='mb-12 mt-3 pb-1'>Sign in to continue</h4>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative mb-4' data-te-input-wrapper-init>
                      <Input
                        label='Phone'
                        name='phone'
                        bordered
                        {...register('phone', {
                          required: {
                            value: true,
                            message: 'Phone number is required',
                          },
                        })}
                        error={errors?.phone?.message}
                      />
                    </div>
                    <div className='relative mb-4' data-te-input-wrapper-init>
                      <Input
                        label='Passsword'
                        name='password'
                        type='password'
                        bordered
                        {...register('password', {
                          required: {
                            value: true,
                            message: 'Password is required',
                          },
                        })}
                        error={errors?.password?.message}
                      />
                    </div>
                    <div className='mb-12 pb-1 pt-1 flex justify-between'>
                      <Button type='submit' loading={isLoading}>
                        {' '}
                        {loading ? 'Loading...' : 'Log in'}{' '}
                      </Button>
                      <div className='mt-2'>Forgot password?</div>
                    </div>
                    <div className='flex items-center pb-6'>
                      <p className='mb-0 mr-2'>Don't have an account?</p>
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

export default Page
