import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import { IconPlus } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const AddNewStaff = ({ isOpen, onClose }) => {
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
         <Drawer isOpen={isOpen} onClose={onClose} title='Add New Staff'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
               <Input label='text' bordered {...register('name', {
                  required: {
                     value: true,
                     message: ' Name is required'
                  }
               })} error={errors?.name?.message} />

               <Input type='number' label='Phone' bordered {...register('phone', {
                  required: {
                     value: true,
                     message: ' Phone is required'
                  }
               })} error={errors?.phone?.message} />

               <Input type='email' label=' Email' bordered {...register('email', {
                  required: {
                     value: true,
                     message: ' Email is required'
                  }
               })} error={errors?.email?.message} />

               <Input type='number' label='Amount' bordered {...register('amount', {
                  required: {
                     value: true,
                     message: ' Amount is required'
                  }
               })} error={errors?.amount?.message} />

               {/* <Input type='text' label='Amount' bordered {...register('amount', {
                  required: {
                     value: true,
                     message: ' Amount is required'
                  }
               })} error={errors?.amount?.message} /> */}

               <Input type='text' label='Department' bordered {...register('department', {
                  required: {
                     value: true,
                     message: ' Department is required'
                  }
               })} error={errors?.department?.message} />

               <Button type='submit' className='mt-10' leftIcon={<IconPlus />} >Add New Staff</Button>
            </form>
         </Drawer>
      </>
   )
}

export default AddNewStaff;