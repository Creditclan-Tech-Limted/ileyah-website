import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Select from '@/global/Select';
import TextArea from '@/global/TextArea';
import { useToast } from '@/lib/use-toast';
import { areas } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconCircleCheckFilled, IconX } from '@tabler/icons-react';
import axios from 'axios';
import { useState } from 'react'
import { useForm } from 'react-hook-form';

const PostRequest = ({ isOpen, onClose }) => {
  const toast = useToast();
  const { data, updateData } = useSignupStore((state) => state);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState('request');

  const house_types = [
    { value: 'room-only', text: 'Room only' },
    { value: 'room-parlour', text: 'Room and parlour' },
    { value: 'two-bedroom', text: 'Two bedroom' },
    { value: 'three-bedroom', text: 'Three bedroom' },
    { value: 'four-bedroom', text: 'Four bedroom' },
    { value: 'bungalow', text: 'Bungalow' },
    { value: 'duplex', text: 'Duplex' },
  ];

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/createFindHouse', { ...values, landlordAgentId: data?.user.id });
      if (res?.data?.status) {
        console.log('Successfully created');
        setLoading(false);
        setViews('success')
      }
    } catch (error) {
      setLoading(false)
      console.log({ error });
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {views === 'request' && (
          <>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-semibold">Fine me a House</h3>
              <Button
                onClick={onClose} rounded icon={<IconX size="20" />}
                size="sm" color="red" variant="outlined"
              > <IconX /> </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <Input
                  bordered label='Rent ' block
                  {...register("amount", {
                    required: {
                      value: true,
                      message: "amount is required"
                    },
                    min: {
                      value: 300000,
                      message: "Please provide an amount greater than ₦100,000",
                    },
                    max: {
                      value: 3000000,
                      message: "Please provide an amount less than ₦3million",
                    },
                  })} error={errors?.amount?.message}
                />
                <Select
                  options={house_types} label='House Type' bordered
                  {...register('house_types', {
                    required: {
                      value: true,
                      message: 'House Type is required'
                    }
                  })}
                  error={errors?.house_types?.message}
                />
                <Select
                  options={areas}
                  label='Area'
                  name='Area'
                  {...register('area', {
                    required: {
                      value: true,
                      message: 'area is required',
                    },
                  })}
                  error={errors?.area?.message}
                />
                <TextArea
                  label='Comments' bordered
                  {...register('comments', {
                  })}
                  error={errors?.comments?.message}
                />
              </div>
              <Button type='submit' className="mt-10" loading={loading}>
                Submit
              </Button>
            </form>
          </>
        )}
        {views === 'success' && (
          <>
            <div className="flex h-screen">
              <div className="mx-auto text-center my-auto">
                <IconCircleCheckFilled className='mx-auto text-green-600' color='green' size={100} />
                <p className='mt-5 font-bold text-xl'>Request successful</p>
                <p> We'll revert in the next 24 - 48 hours.</p>
                <p>Thank You.</p>
                <Button className='mt-10' variant='outlined' color='green' onClick={onClose}>Continue</Button>
              </div>
            </div>
          </>
        )}
      </Drawer>
    </>
  )
}

export default PostRequest;