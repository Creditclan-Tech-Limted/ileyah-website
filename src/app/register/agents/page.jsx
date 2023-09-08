'use client'
import { AUTH_ENDPOINT } from '@/api/landlord'
import { useSignUpMutation } from '@/api/rent'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Select from '@/global/Select'
import { areas, lgas } from '@/lib/utils'
import useSignupStore from '@/store/signup'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Page = () => {
  const router = useRouter()
  const { mutateAsync: send, isLoading } = useSignUpMutation()
  const { data, updateData } = useSignupStore((state) => state)
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

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(AUTH_ENDPOINT.REGISTER(), {
        ...data,
        user_type: 'agent/landlords',
      })
      setLoading(true)
      if (res.data.status === true) {
        toast.success(response.data.message)
        router.push('/login')
      }
    } catch (error) {
      if (
        !error?.response?.data?.status &&
        error?.response?.data?.message.includes('User already exist')
      ) {
        setError({ status: true, message: error?.response?.data?.message })
        reset()
      } else {
        setError({
          status: true,
          message:
            error?.response?.data?.message || 'An error occured, pls try again',
        })
        reset()
      }
    }
  }

  return (
    <>
      <div className='g-6 flex flex-wrap justify-center dark:text-neutral-200 h-screen items-stretch text-black'>
              <div className='px-4 md:px-0 lg:w-8/12 my-auto text-left mx-auto'>
                <div className='md:p-12 max-w-xl mx-auto'>
                  <div className=''>
                    <img
                      className='w-48'
                      src='/assets/images/ileyah-logo.png'
                      alt='logo'
                    />
                    <h4 className='mb-12 mt-1 pb-1'>Sign up to continue</h4>
                  </div>
                  {error.status && (
                    <div
                      className='flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100'
                      role='alert'
                    >
                      <svg
                        aria-hidden='true'
                        className='flex-shrink-0 inline w-5 h-5 mr-3'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      <span className='sr-only'>Info</span>
                      <div>
                        <span className='font-medium'>{error?.message}</span>.
                      </div>
                    </div>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative mb-2' data-te-input-wrapper-init>
                      <Input
                        label='Full Name'
                        bordered
                        name='name'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Full Name is required',
                          },
                        })}
                        error={errors?.fullname?.message}
                      />
                    </div>
                    <div className='relative mb-4' data-te-input-wrapper-init>
                      <Input
                        label='Email'
                        name='email'
                        bordered
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Email is required',
                          },
                        })}
                        error={errors?.email?.message}
                      />
                    </div>
                    <div className='relative mb-4' data-te-input-wrapper-init>
                      <Input
                        label='Phone Number'
                        bordered
                        name='phone'
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
                        type='password'
                        name='passsword'
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
                    <div className='relative my-4'>
                      <div className='mb-4'>
                        <Select
                          options={areas}
                          label='Area'
                          name='Area'
                          {...register('area', {
                            required: {
                              value: true,
                              message: 'Area is required',
                            },
                          })}
                          error={errors?.area?.message}
                        />
                      </div>
                      <div className='mb-4'>
                        <Select
                          options={lgas}
                          label='L.G.A'
                          name='LGA'
                          {...register('lga', {
                            required: {
                              value: true,
                              message: 'LGA is required',
                            },
                          })}
                          error={errors?.lga?.message}
                        />
                      </div>
                    </div>
                    <div className='mb-12 pb-1 pt-1 flex justify-between'>
                      <Button type='submit' loading={isLoading}>
                        {loading ? 'Loading...' : 'Sign Up'}{' '}
                      </Button>
                      <div className='mt-2'>Forgot password?</div>
                    </div>

                    <div className='flex items-center pb-6'>
                      <p className='mb-0 mr-2'>Already have an account?</p>
                      <Link href='/login'>
                        <p>Login</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className='flex items-center sm:block rounded-b-lg lg:w-4/12 bg-cover bg-[60%]'
                style={{
                  backgroundImage:
                    'url(/assets/agent_register.jpeg)',
                }}
              >
                <div className='px-4 py-6  md:mx-6 md:p-12'>
                  <h4 className='mb-6 text-xl font-semibold'></h4>
                  <p className='text-sm'></p>
                </div>
              </div>
          </div>
    </>
  )
}

export default Page;