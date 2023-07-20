import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Select from '@/global/Select';
import TextArea from '@/global/TextArea';
import { areas, lgas } from '@/lib/utils';
import { IconPlus } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const AddNewProperty = ({ isOpen, onClose }) => {
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
      <Drawer isOpen={isOpen} onClose={onClose} title='Add New Property'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <Input label='Property Name' bordered {...register('name', {
            required: {
              value: true,
              message: ' Name is required'
            }
          })} error={errors?.name?.message} />

          <TextArea label='House Address' />

          <Input type='number' label='House Number' bordered {...register('phone', {
            required: {
              value: true,
              message: 'House Number is required'
            }
          })} error={errors?.number?.message} />

          <Input type='number' label='Amount' bordered {...register('amount', {
            required: {
              value: true,
              message: ' Amount is required'
            }
          })} error={errors?.amount?.message} />

          <Input label='Area' bordered {...register('area', {
            required: {
              value: true,
              message: 'Area is required'
            }
          })} error={errors?.area?.message} />

          <Select options={lgas} label='L.G.A' />

          <Select options={areas} label='Area' />

          <Button type='submit' className='mt-10' leftIcon={<IconPlus />} >Add New Property</Button>
        </form>
      </Drawer>
    </>
  )
}

export default AddNewProperty;