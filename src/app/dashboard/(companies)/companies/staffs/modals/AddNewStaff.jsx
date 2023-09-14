import UserInfor from '@/api/UserInfor';
import { STAFF } from '@/api/companies';
import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import { IconPlus } from '@tabler/icons-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useToast } from '@/lib/use-toast'


const AddNewStaff = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const companyId = UserInfor().userId
      const toast = useToast()

  const onSubmit = async (data) => {
  
    try {
      const res = await axios.post(STAFF.ADD_STAFF(), {
        ...data,
        companyId: companyId,
      })
      if(res?.data?.status){
        toast.success(res?.data?.message)
        reset()
        onClose()
      }
    } catch (error) {
       toast.error(error?.response?.data?.message)
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Add New Staff'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <Input label='Name' bordered {...register('name', {
            required: {
              value: true,
              message: ' Name is required'
            }
          })} error={errors?.name?.message} />

          <Input type='Phone Number' label='Phone' bordered {...register('phone', {
            required: {
              value: true,
              message: ' Phone is required'
            }
          })} error={errors?.phone?.message} />

          <Input type='Work Email' label='Email' bordered {...register('email', {
            required: {
              value: true,
              message: ' Email is required'
            }
          })} error={errors?.email?.message} />

          <Input type='number' label='Loan Amount' bordered {...register('amount', {
            required: {
              value: true,
              message: ' Amount is required'
            }
          })} error={errors?.amount?.message} />

          <Input type='text' label='Salary Range' bordered {...register('salary', {
            required: {
              value: true,
              message: 'Salary Range is required'
            }
          })} error={errors?.salary?.message} />

          <Input type='text' label='Work Email' bordered {...register('work_email', {
            required: {
              value: true,
              message: ' Work Email is required'
            }
          })} error={errors?.work_email?.message} />

          <Button type='submit' className='mt-10' leftIcon={<IconPlus />} >Add New Staff</Button>
        </form>
      </Drawer>
    </>
  )
}

export default AddNewStaff;