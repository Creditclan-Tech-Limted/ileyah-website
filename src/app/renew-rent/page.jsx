'use client'
import React, { useRef, useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import DashNav from '../dashboard/DashNav'
import Input from '@/global/Input'
import useSignupStore from '@/store/signup'
import Select from '@/global/Select'
import TextArea from '@/global/TextArea'
import Button from '@/components/global/Button'
import { useForm } from 'react-hook-form'
import { CropperRef, Cropper, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css'
import Modal from '@/global/Modal'
import { useCreateRentRequestMutation } from '@/api/rent'
import RequestDetails from './RequestDetails'
import Success from './Success'

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [views, setViews] = useState('request')
  const [image, setImage] = useState("");
  const [cropData] = useState(data?.houseImage?.picture);
  const [cropper, setCropper] = useState();
  const [houseType, setHouseType] = useState(data?.renew?.house_type);
  const [isOpen, setIsOpen] = useState(true);
  const [userRequest, setUserRequest] = useState()
  const cropperRef = useRef();

  const { mutateAsync: send, isLoading } = useCreateRentRequestMutation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const house_types = [
    { value: 'room-only', text: 'Room only' },
    { value: 'room-parlour', text: 'Room and parlour' },
    { value: 'two-bedroom', text: 'Two bedroom' },
    { value: 'three-bedroom', text: 'Three bedroom' },
    { value: 'four-bedroom', text: 'Four bedroom' },
    { value: 'bungalow', text: 'Bungalow' },
    { value: 'duplex', text: 'Duplex' },
  ]

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
    // console.log(cropperRef.current.getCanvas().toDataURL());
    if (typeof cropperRef !== "undefined") {
      const profile_image = cropperRef.current.getCanvas().toDataURL();
      updateData({
        houseImage: { ...data?.houseImage, picture: profile_image },
      });
      console.log(data);
      setIsOpen(false)
      console.log({ profile_image });
      // cropper.getCroppedCanvas().toBlob((blob) => {
      //   console.log(blob);
      // });
    }
  };

  const onSubmit = async (data) => {
    const payload = { ...data, source: 1, process_type: 'renew', picture: '', full_name: 'Praise', phone: '09039719011', email: 'oluwadhammiee@gmail.com' }
    const res = await send(payload);
    console.log(res.data);
    if (res.data.status) {
      setUserRequest(res.data.rent_id);
      setViews('success')
    }
  }

  const onChangeC = (CropperRef) => {
    // console.log(CropperRef);
    // console.log(cropper.current.getCoordinates(), cropper.getCanvas());
  };

  return (
    <>
      {/* <Sidebar /> */}
      <DashNav />
      <div className="container px-6">
        {views === 'request' && (
          <>
            <p className="mt-5 text-center">
              Welcome, Please provide the following information to proceed
            </p>

            <div className='max-w-xl mx-auto mt-10'>
              <div>
                <>
                  {!!image && (
                    <>
                      <div className='w-full h-50'>
                        <Modal isOpen={isOpen}>
                          <Cropper ref={cropperRef}
                            src={image}
                            onChange={onChangeC}
                            className={'cropper'}
                            stencilProps={{ aspectRatio: 1 }}
                            imageRestriction={ImageRestriction.fillArea}
                          />
                          <div className="flex my-5 space-x-5">
                            <Button onClick={handleCancel} variant='outlined' color='red' block>Cancel</Button>
                            <Button onClick={submit} block>Upload</Button>
                          </div>
                        </Modal>
                      </div>
                    </>
                  )}
                  {!image && (
                    <>
                      <div className="">
                        <p className="text-cc-dark">
                          Kindly upload a picture of yourself in front of the house
                        </p>
                      </div>
                      <div>
                        <label className="flex items-center">
                          <div
                            style={{ backgroundImage: `url(${cropData})` }}
                            className="picture-upload"
                          >
                            <input type="file" hidden onChange={onChange} />

                            {!cropData && (
                              <span className="picture-upload-inner pointer">
                                <i className="fa-solid fa-plus"></i>
                              </span>
                            )}
                          </div>
                        </label>
                      </div>
                    </>
                  )}
                </>
              </div>
              <div className='space-y-10 ml-5 flex-1'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-10'>
                  <Input bordered label='Rent Amount' block
                    {...register("amount", {
                      required: {
                        value: true,
                        message: "amount is required"
                      },
                      min: {
                        value: 100000,
                        message: "Please provide an amount greater than ₦100,000",
                      },
                      max: {
                        value: 3000000,
                        message: "Please provide an amount less than ₦3million",
                      },
                    })} error={errors?.amount?.message} />
                  <Select options={house_types} label='House Type'  {...register('house_types', {
                    required: {
                      value: true,
                      message: 'House Type is required'
                    }
                  })} error={errors?.house_types?.message} />
                  <TextArea label='House Address' {...register('address', {
                    required: {
                      value: true,
                      message: 'House Address is required'
                    }
                  })} error={errors?.address?.message} />
                  <Button type='submit' className='cursor-pointer' loading={isLoading}>Submit</Button>
                </form>
              </div>
            </div>
          </>
        )}
        {views === 'success' && (
          <>
            <Success onNext={() => setViews('request-details')} />
          </>
        )}
        {views === 'request-details' && (
          <>
            <RequestDetails />
          </>
        )}
      </div>
    </>
  )
}

export default Page;