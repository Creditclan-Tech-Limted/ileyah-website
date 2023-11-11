import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import Select from '@/global/Select'
import TextArea from '@/global/TextArea'
import { IconCircleChevronRight, IconX } from '@tabler/icons-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const ProDetails = ({ isOpen, onClose, property }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
    { defaultValues: { ...property } },
  )

  const onSubmit = async (values) => {
    try {
      console.log({ values });
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Edit Property'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-8'>
            <Input
              label='Property Name'
              bordered
              {...register('description', {
                required: {
                  value: true,
                  message: ' Name is required',
                },
              })}
              error={errors?.name?.message}
            />
            <Input
              label='Price'
              bordered
              {...register('price', {
                required: {
                  value: true,
                  message: 'Price is required',
                },
              })}
              error={errors?.name?.message}
            />
            <TextArea
              label='House Address'
              {...register('address', {
                required: {
                  value: true,
                  message: ' Address is required',
                },
              })}
              error={errors?.address?.message}
            />
            <Input
              type='number'
              label='House Number'
              bordered
              {...register('house_no', {
                required: {
                  value: true,
                  message: 'House Number is required',
                },
              })}
              error={errors?.number?.message}
            />
            <Input
              type='text'
              label='Area'
              bordered
              {...register('area', {
                required: {
                  value: true,
                  message: 'Area is required',
                },
              })}
              error={errors?.number?.message}
            />
            <TextArea
              label='Descriptions'
              {...register('title', {
                required: {
                  value: true,
                  message: ' description is required',
                },
              })}
              error={errors?.description?.message}
            />
              <Input
                label='Agent Phone Number'
                bordered
                {...register('agent_phone', {
                  required: {
                    value: true,
                    message: 'Agent No is required',
                  },
                })}
                error={errors?.area?.message}
              />
              <Input
                label='Source'
                bordered
                {...register('source', {
                  required: {
                    value: true,
                    message: 'Source required',
                  },
                })}
                error={errors?.source?.message}
              />
            </div>
        </form>
        <p className="ml-auto mt-5 text-blue-600 underline">  <a target="_blank" href={property?.link} rel="noopener noreferrer"> Check Property Source</a> </p>

        <div className="flex space-x-4 mt-5">
          <Button block variant='outlined' color='red'> Submit </Button>
          <Button block> Publish </Button>
        </div>
      </Drawer>
    </>
  )
}

export default ProDetails