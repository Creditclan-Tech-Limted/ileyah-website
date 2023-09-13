'use client'
import { AUTH_ENDPOINT } from '@/api/companies'
import { useSignUpMutation } from '@/api/rent'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Select from '@/global/Select'
import { areas, lgas, sectors, staff_strength } from '@/lib/utils'
import useSignupStore from '@/store/signup'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { toast } from 'react-toastify'
import { useToast } from '@/lib/use-toast'

const Page = () => {
  const router = useRouter()
  const { mutateAsync: send, isLoading } = useSignUpMutation()
  const { data, updateData } = useSignupStore((state) => state)
  const toast = useToast()
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
    console.log(data, 'data')
    try {
      const res = await axios.post(AUTH_ENDPOINT.REGISTER(), {
        ...data,
        user_type: 'companies',
      })
      
      setLoading(true)
      if (res.data.status) {
        toast.success(res.data.message)
        router.push('/login')
      }
    } catch (error) {
      if (
        !error?.res?.data?.status &&
        error?.res?.data?.message.includes('User already exist')
      ) {
        setError({ status: true, message: error?.res?.data?.message })
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
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
              <Input label='Company Name' bordered {...register('name', {
                required: {
                  value: true,
                  message: 'Company Name is required'
                }
              })} error={errors?.name?.message} />

              <Input type='email' label='Company Email' bordered {...register('email', {
                required: {
                  value: true,
                  message: 'Company Email is required'
                }
              })} error={errors?.email?.message} />

              <Input label='Company Address' bordered {...register('address', {
                required: {
                  value: true,
                  message: 'Company Address is required'
                }
              })} error={errors?.address?.message} />

              <Select
                options={sectors} label='Company Sector' bordered
                {...register('sectors', {
                  required: {
                    value: true,
                    message: 'Sector is required'
                  }
                })}
                error={errors?.sectors?.message}
              />

              <Select
                options={staff_strength} label='Staff Strength' bordered
                {...register('staff_strength', {
                  required: {
                    value: true,
                    message: 'Staff Strength is required'
                  }
                })}
                error={errors?.staff_strength?.message}
              />

              <Input type='password' label='Password' bordered {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required'
                }
              })} error={errors?.password?.message} />

              <Input type='password' label='Confirm Password' bordered {...register('confirm_password', {
                required: {
                  value: true,
                  message: 'Confirm Password is required'
                }
              })} error={errors?.confirm_password?.message} />

              <Button type='submit' className='mt-10'>Sign Up</Button>
            </form>
          </div>
        </div>
        <div
          className='flex items-center hidden sm:block rounded-b-lg lg:w-4/12 bg-cover bg-[60%]'
          style={{
            backgroundImage:
              'url(/assets/images/companiess.jpeg)',
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