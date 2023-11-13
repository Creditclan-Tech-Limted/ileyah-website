import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import TextArea from '@/global/TextArea';
import { IconBrandWhatsapp, IconHeadset, IconMail, IconPhone } from '@tabler/icons-react';
import React from 'react'
import { useForm } from 'react-hook-form';

const Support = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {

    } catch (error) {

    }
  }
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Contact Us'}>
        <div className='flex flex-col'>
          <div className='space-y-5'>
            <a href="tel:+2349055552255" target='_blank' className='mt-5'>
              <p className='inline-flex'><IconPhone className='mr-4' />Talk to an Advisor. +234 9055 552 255</p><br />
            </a>
            <a href="mailto:support@ileyah.com" target='_blank'  className='mt-5'>
              <p className='inline-flex my-5'> <IconMail className='mr-4' /> Send an Email: support@ileyah.com </p> <br />
            </a>
            <a href="https://wa.me/+2349055552255" target='_blank'>
              <p className='inline-flex'><IconBrandWhatsapp className='mr-4' />Contact on WhatsApp. +234 9055 552 255</p><br />
            </a>
          </div>
          <div>
            <Button variant='outlined' className='mt-14' onClick={onClose}>Continue</Button>
          </div>
        </div>
        {/* <p>Please fill in the information below</p> */}
        {/* <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <Input
            label='Full Name'
            bordered
            {...register('name', {
              required: {
                value: true,
                message: 'Name is required',
              },
            })}
            error={errors?.name?.message}
          />
          <Input
            label='Phone'
            bordered
            {...register('phone', {
              required: {
                value: true,
                message: 'phone is required',
              },
            })}
            error={errors?.phone?.message}
          />
          <Input
            label='Email'
            bordered
            {...register('email', {
              required: {
                value: true,
                message: 'email is required',
              },
            })}
            error={errors?.email?.message}
          />
          <TextArea
            label='Comments'
            {...register('comments', {
              required: {
                value: true,
                message: ' comments is required',
              },
            })}
            error={errors?.comments?.message}
          />
          <Button
            type='submit'
            className='mt-10'
            rightIcon={<IconCircleChevronRight />}
            loading={false}
          >
            Submit
          </Button>
        </form> */}
      </Drawer>
    </>
  )
}

export default Support;