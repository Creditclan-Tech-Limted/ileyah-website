import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Select from '@/global/Select';
import TextArea from '@/global/TextArea';
import { areas, lgas } from '@/lib/utils';
import { IconChevronLeft, IconPlus, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewProperty = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [views, setViews] = useState('form');

  const onSubmit = async (data) => {
    try {
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {views === 'form' && (
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-semibold">Add new Property</h3>
              <Button
                onClick={onClose} rounded-full
                size="sm" color="red" variant="outlined"
              > <IconX /> </Button>
            </div>
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

              <Select options={areas} label='Area' />

              <Select options={lgas} label='L.G.A' />

              <Button type='submit' className='mt-10' leftIcon={<IconPlus />} onClick={() => setViews('image')} > Continue </Button>
            </form>
          </div>
        )}
        {views === 'image' && (
          <div>
            <div className="flex items-center justify-between mb-10">
              <div onClick={() => setViews('form')} className='border border-black rounded-full p-1'> <IconChevronLeft /> </div>
              {/* <h3 className="text-xl font-semibold">  </h3> */}
              <Button
                onClick={onClose} rounded-full
                size="sm" color="red" variant="outlined"
              > <IconX /> </Button>
            </div>
            <div>
              <h3 className="text-xl">Please upload property image</h3>
              <div className='border border-black h-52 w-52 rounded-full mt-5 flex items-center justify-center'>
                <IconPlus size={50} />
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </>
  )
}

export default AddNewProperty;