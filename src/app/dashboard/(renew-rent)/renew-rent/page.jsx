'use client'
import { useEffect, useRef, useState } from 'react'
import Input from '@/global/Input'
import useSignupStore from '@/store/signup'
import Select from '@/global/Select'
import TextArea from '@/global/TextArea'
import Button from '@/components/global/Button'
import { useForm } from 'react-hook-form'
import { Cropper, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'
import Modal from '@/global/Modal'
import { useCreateRentRequestMutation } from '@/api/rent'
import { IconChevronLeft } from "@tabler/icons-react";
import RequestDetails from './RequestDetails'
import Success from './Success'
import { useSearchParams } from 'next/navigation'
import Drawer from '@/components/Drawer'
import { useToast } from '@/lib/use-toast'

const RenewRentDashboard = ({ isOpenDrawer, onClose }) => {
  const [views, setViews] = useState('request')
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const { data, updateData } = useSignupStore((state) => state);
  const [image, setImage] = useState("");
  const [cropper, setCropper] = useState();
  const [houseType, setHouseType] = useState(data?.renew?.house_type);
  const [isOpen, setIsOpen] = useState(true);
  const [userRequest, setUserRequest] = useState();
  const cropperRef = useRef();
  const toast = useToast();

  const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (status === 'pending') {
      setViews('request-details')
    }
  }, [status])

  const house_types = [
    { value: 'room-only', text: 'Room only' },
    { value: 'room-parlour', text: 'Room and parlour' },
    { value: 'two-bedroom', text: 'Two bedroom' },
    { value: 'three-bedroom', text: 'Three bedroom' },
    { value: 'four-bedroom', text: 'Four bedroom' },
    { value: 'bungalow', text: 'Bungalow' },
    { value: 'duplex', text: 'Duplex' },
  ];

  const handleCancel = () => {
    setImage("");
  };

  const onChange = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const submit = async () => {
    if (typeof cropperRef !== "undefined") {
      const profile_image = cropperRef.current.getCanvas().toDataURL();
      updateData({
        houseImage: { ...data?.houseImage, picture: profile_image },
      });
      setIsOpen(false)
    }
  };

  const onSubmit = async (values) => {
    const payload = {
      source: 1,
      process_type: 'renew',
      picture: '',
      full_name: data?.user?.name,
      phone: data?.user?.phone,
      email: data?.user?.email,
      information_source: "Ileyah Representative",
      amount: values.amount,
      house_type: values.house_type,
      address: values.address,
    }
    const res = await send(payload);
    if (res.data.status) {
      toast.success(res.data.message || "Request Successfully Created");
      setUserRequest(res.data.rent_id);
      setViews('request-details')
    }
  }

  return (
    <>
      <Drawer isOpen={isOpenDrawer} onClose={onClose} title='I have Found a House'>
        {
          views === 'request' && (
            <>
              <h3 className="text-xl max-w-sm font-medium mb-10 flex">
                <IconChevronLeft onClick={onClose} className='border border-black rounded-full mb-3 mr-3 cursor-pointer' />
                Please provide the following information to proceed
              </h3>
              <div className='space-y-6 flex-1'>
                <div className="flex items-center justify-between border border-gray-300 rounded-3xl px-6 py-6">
                  <p className="text-cc-dark max-w-xs">
                    Upload a picture of yourself in front of the house
                  </p>
                  <div>
                    <div className="flex items-center">
                      <label
                        className="border-2 border-gray-300 border-dashed w-[150px] h-[150px] rounded-2xl flex justify-center items-center hover:bg-gray-100 cursor-pointer relative"
                      >
                        <input
                          type="file" className="w-[1px] h-[1px] absolute top-0 left-0" onChange={onChange}
                        />
                        {
                          !!data?.houseImage?.picture ? (
                            <img
                              src={data?.houseImage?.picture} alt="user"
                              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-2xl"
                            />
                          ) : (
                            <i className="fa-solid fa-plus fa-2x opacity-75"></i>
                          )
                        }
                      </label>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <Input
                        bordered label='Rent ' block type='number'
                        {...register("amount", {
                          required: {
                            value: true,
                            message: "amount is required"
                          },
                          // min: {
                          //   value: 300000,
                          //   message: "Please provide an amount greater or euqals ₦300,000",
                          // },
                          // max: {
                          //   value: 3000000,
                          //   message: "Please provide an amount less than ₦3million",
                          // },
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
                    </div>
                    <Input
                      bordered label='Landlord Number' block
                      {...register("landlord_number", {
                        required: {
                          value: true,
                          message: "Landlord number is required"
                        }
                      })} error={errors?.landlord_number?.message}
                    />
                    <TextArea
                      label='House Address' bordered
                      {...register('address', {
                        required: {
                          value: true,
                          message: 'House Address is required'
                        }
                      })}
                      error={errors?.address?.message}
                    />
                  </div>
                  <Button type='submit' className="mt-10" loading={isLoading}>
                    Submit
                  </Button>
                </form>
              </div>
            </>
          )
        }
        {
          views === 'success' && (
            <Success onNext={() => setViews('request-details')} />
          )
        }
        {
          views === 'request-details' && (
            <RequestDetails />
          )
        }

        {
          !!image && (
            <Modal isOpen={isOpen} size="md">
              <Cropper
                ref={cropperRef}
                src={image}
                className={'cropper'}
                stencilProps={{ aspectRatio: 1 }}
                imageRestriction={ImageRestriction.fitArea}
              />
              <div className="flex justify-center mt-5 space-x-3">
                <Button onClick={handleCancel} variant='outlined' color='red'>Cancel</Button>
                <Button onClick={submit}>Upload</Button>
              </div>
            </Modal>
          )
        }
      </Drawer>
    </>
  )
};

export default RenewRentDashboard;