import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Select from '@/global/Select';
import { sectors, staff_strength } from '@/lib/utils';
import { useForm } from 'react-hook-form';

const SignUp = ({ isOpen, isClosed }) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={isClosed} title='Sign Up'>
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
      </Drawer>
    </>
  )
}

export default SignUp;