import { useCreateIleyahLoan } from '@/api/rent';
import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import { useToast } from '@/lib/use-toast';
import { IconPlus } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const AddNewLoan = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { mutateAsync: send, isLoading } = useCreateIleyahLoan();
  const toast = useToast();


  const onSubmit = async (values) => {
    try {
      const res = await send({ ...values })
      if (res.data.status) {
        toast.success(res.data.message || "Request Successfully Created");
        reset();
      }
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Add New Loan'>
        <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='Name'
            bordered
            {...register('name', {
              required: {
                value: true,
                message: ' Name is required',
              },
            })}
            error={errors?.name?.message}
          />

          <Input
            type='Phone Number'
            label='Phone'
            bordered
            {...register('phone', {
              required: {
                value: true,
                message: ' Phone is required',
              },
            })}
            error={errors?.phone?.message}
          />

          <Input
            type='email'
            label='Email'
            bordered
            {...register('email', {
              // required: {
              //   value: true,
              //   message: ' Email is required',
              // },
            })}
            error={errors?.email?.message}
          />

          <Input
            type='number'
            label='Amount'
            bordered
            {...register('amount', {
              required: {
                value: true,
                message: 'Amount is required',
              },
            })}
            error={errors?.amount?.message}
          />

          <Input
            type='text'
            label='Category'
            bordered
            {...register('category', {
              required: {
                value: true,
                message: 'Category is required',
              },
            })}
            error={errors?.category?.message}
          />

          <Input
            type='date'
            label='Date Disbursed'
            bordered
            {...register('date_disbursed', {
              required: {
                value: true,
                message: 'Date Disbursed is required',
              },
            })}
            error={errors?.date_disbursed?.message}
          />

          <Button type='submit' className='mt-10' leftIcon={<IconPlus />} loading={isLoading} >
            Submit
          </Button>
        </form>
      </Drawer>
    </>
  )
}

export default AddNewLoan;