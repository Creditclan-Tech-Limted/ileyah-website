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
  const [activeTab, setActiveTab] = useState('tenants')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      const res = await axios.post(AUTH_ENDPOINT.LOGIN(), {
        ...data,
        user_type: activeTab,
      })
      if (res.data.status) {
        updateData({ user: res?.data?.data })
        localStorage.setItem('ileyah_token', res?.data?.data)
        localStorage.setItem('userId', res?.data?.data?.id)
        if (res?.data?.data?.user_type === 'agents/landlords') {
          toast.success(res.data.message)
          return router.push(`/dashboard/landlords/listings?r=${res?.data?.data?.phone}`)
        } else if (res?.data?.data?.user_type === 'companies') {
          toast.success(res.data.message)
          router.push('/dashboard/companies')
        } else {
          router.push('/dashboard')
        }
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError({ status: true, message: error?.response?.data?.message })
      toast.error(error?.res?.data?.message)
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
                <div className='md:p-12 max-w-xl mx-auto space-y-6'>
                  <div className=''>
                    <img
                      className='w-48'
                      src='/assets/images/ileyah-logo.png'
                      alt='logo'
                    />
                    <h4 className='pb-1 text-gray-400'>Sign in to continue</h4>
                  </div>

                  <div className=''>
                    <div className='flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 justify-between'>
                      <button
                        className={`py-2 px-4 rounded-t-lg ${activeTab === 'tenants'
                          ? 'bg-gray-200 rounded-t-lg active text-blue-900 hover:text-gray-600 '
                          : ''
                          }`}
                        onClick={() => handleTabClick('tenants')}
                      >
                        Tenants
                      </button>
                      <button
                        className={`py-2 px-4 rounded-t-lg ${activeTab === 'agents/landlords'
                          ? 'bg-gray-200 rounded-t-lg active text-blue-900 hover:text-gray-600 '
                          : ''
                          }`}
                        onClick={() => handleTabClick('agents/landlords')}
                      >
                        Agents
                      </button>
                      <button
                        className={`py-2 px-4 rounded-t-lg ${activeTab === 'companies'
                          ? 'bg-gray-200 rounded-t-lg active text-blue-900 hover:text-gray-600 '
                          : ''
                          }`}
                        onClick={() => handleTabClick('companies')}
                      >
                        Company
                      </button>
                    </div>
                    <div className=' p-4  rounded-b-lg'>
                      {activeTab === 'tenants' && (
                        <div>
                          {/* Tenants Login Form */}
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
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
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
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
                              <p className='mb-0 mr-2'>
                                Don't have an account?
                              </p>
                              <Link href='/register'>
                                <p>Register</p>
                              </Link>
                            </div>
                          </form>
                        </div>
                      )}
                      {activeTab === 'agents/landlords' && (
                        <div>
                          {/* Agent Login Form */}
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
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
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
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
                              <Button type='submit' loading={loading}>
                                {' '}
                                {loading ? 'Loading...' : 'Log in'}{' '}
                              </Button>
                              <div className='mt-2'>Forgot password?</div>
                            </div>
                            <div className='flex items-center pb-6'>
                              <p className='mb-0 mr-2'>
                                Don't have an account?
                              </p>
                              <Link href='/register/agents'>
                                <p>Register</p>
                              </Link>
                            </div>
                          </form>
                        </div>
                      )}
                      {activeTab === 'companies' && (
                        <div>
                          {/* Company Login Form */}
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
                              <Input
                                label='Email'
                                name='email'
                                bordered
                                {...register('email', {
                                  required: {
                                    value: true,
                                    message: 'email number is required',
                                  },
                                })}
                                error={errors?.phone?.message}
                              />
                            </div>
                            <div
                              className='relative mb-4'
                              data-te-input-wrapper-init
                            >
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
                              <Button type='submit' loading={loading}>Log in
                              </Button>
                              <div className='mt-2'>Forgot password?</div>
                            </div>
                            <div className='flex items-center pb-6'>
                              <p className='mb-0 mr-2'>
                                Don't have an account?
                              </p>
                              <Link href='/register/companies'>
                                <p>Register</p>
                              </Link>
                            </div>
                          </form>
                          {/* Add your company login form here */}
                        </div>
                      )}
                    </div>
                  </div>
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
