'use client'
import { useLoginMutation } from '@/api/rent'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import { AUTH_ENDPOINT } from '@/api/landlord'
import { useToast } from '@/lib/use-toast'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

const Page = () => {
    const router = useRouter()
    const toast = useToast();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm()
    const [loading, setLoading] = useState(false)
    const [isVisiblePassword, setIsVisiblePassword] = useState(false)
  
    const { mutateAsync: send, isLoading } = useLoginMutation()




    const onSubmit = async (data) => {
        // router.push('/reset-password')
    
        // try {
        //   setLoading(true);
        //   const res = await axios.post(AUTH_ENDPOINT.LOGIN(), {
        //     ...data,
        //     // user_type: activeTab,
        //   })
        //   if (res.data.status) {
        //     router.push('/reset-password')
        //   }
        //   setLoading(false)
        // } catch (error) {
        //   setLoading(false)
        //   toast.error(error?.response?.data?.message)
        //   reset()
        // }
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
              <div className='md:p-12 px-4 max-w-xl mx-auto space-y-6'>
                <div className=''>
                  <img
                    className='w-48'
                    src='/assets/images/ileyah-logo.png'
                    alt='logo'
                  />
                  <h4 className='pb-1 text-gray-400 mb-4'>Reset Password</h4>
                  <h1 className='pb-1 text-gray-600 text-lg'>We have sent password reset token to your email. Please enter the token and your new password as appropriate</h1>
                </div>

                <div className=''>
      
                  <div className=' py-4  rounded-b-lg'>
                   
                      <div>
                       
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div
                            className='relative mb-4'
                            data-te-input-wrapper-init
                          >
                           <Input
                              label='Reset Token'
                              name='token'
                         
                              bordered
                              {...register('token', {
                                required: {
                                  value: true,
                                  message: 'Token is required',
                                },
                              })}
                              error={errors?.email?.message}
                            />
                          </div>
                          <div
                            className='relative mb-4'
                            data-te-input-wrapper-init
                          >
                            <Input 
                            label='New Password' 
                            type={isVisiblePassword ? 'text'  : 'password'} 
                            togglePasswordVisibility={()=>setIsVisiblePassword(!isVisiblePassword)}
                            rightIcon={isVisiblePassword ? AiFillEyeInvisible  : AiFillEye}
                            bordered {...register('password', {
                            required: {
                            value: true,
                            message: 'Password is required'
                            }
                        })} error={errors?.password?.message} />

                          </div>

                          <div className='relative mb-4'
                            data-te-input-wrapper-init>
                            <Input 
                                type={isVisiblePassword ? 'text'  : 'password'} 
                                togglePasswordVisibility={()=>setIsVisiblePassword(!isVisiblePassword)}
                                rightIcon={isVisiblePassword ? AiFillEyeInvisible  : AiFillEye} 
                                label='Confirm Password' 
                                bordered {...register('confirm_password', {
                                required: {
                                value: true,
                                message: 'Confirm Password is required'
                                }
                            })} error={errors?.confirm_password?.message} />

                          </div>
                         
                          <div className='mb-12 pb-1 pt-1 flex justify-between'>
                            <Button type='submit' loading={isLoading}>
                              {' '}
                              {loading ? 'Loading...' : 'Reset Password'}{' '}
                            </Button>
                            
                          </div>
                          <div className='flex items-center pb-6'>
                            <p className='mb-0 mr-2'>
                             Remember password?
                            </p>
                            <Link href='/login'>
                              <p>Login</p>
                            </Link>
                          </div>
                        </form>
                      </div>
                    
                  
                    
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
