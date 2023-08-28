import { UPLOAD_IMAGE } from '@/api/landlord';
import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import Input from '@/global/Input';
import Select from '@/global/Select';
import TextArea from '@/global/TextArea';
import { areas, lgas } from '@/lib/utils';
import { IconChevronLeft, IconCircleChevronRight, IconPlus, IconTrash, IconX } from '@tabler/icons-react';
import axios from 'axios';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddNewProperty = ({ isOpen, onClose }) => {
  const file = useRef(null);
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const [views, setViews] = useState('form');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = async (e) => {
    try {
      const files = Array.from(e.target.files);
      console.log({ files });
      setSelectedFiles(files);
    } catch (error) {
      console.log(error);
    }
  }

  const handleImageRemove = (src) => {
    // Remove image from the array
    const filteredImages = selectedFiles.filter((image) => image !== src);
    setSelectedFiles(filteredImages);
  };

  const imagePromises = Array.from(selectedFiles).map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  });

  const onSubmit = async (data) => {
    try {
      Promise.all(imagePromises)
        .then(async (base64Images) => {
          const axiosRequests = base64Images.map(async item => {
            try {
              const response = await axios.post(UPLOAD_IMAGE.UPLOAD(), { file: item }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
              console.log(response.data.data);
              return response.data.data.filename;
            } catch (error) {
              console.error('Error with Axios request:', error);
              return null;
            }
          });

          const img = await Promise.all(axiosRequests)
          console.log({ img });

          // console.log({ axiosRequests });
        })
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {views === 'form' && (
          <div>
            <div className='flex items-center justify-between mb-10'>
              <h3 className='text-xl font-semibold'>Add new Property</h3>
              <Button
                onClick={onClose}
                rounded-full
                size='sm'
                color='red'
                variant='outlined'
              >
                {' '}
                <IconX />{' '}
              </Button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
              <Input
                label='Property Name'
                bordered
                {...register('name', {
                  required: {
                    value: true,
                    message: ' Name is required',
                  },
                })}
                error={errors?.name?.message}
              />

              <TextArea label='House Address' />

              <Input
                type='number'
                label='House Number'
                bordered
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'House Number is required',
                  },
                })}
                error={errors?.number?.message}
              />

              <Input
                type='number'
                label='Amount'
                bordered
                {...register('amount', {
                  required: {
                    value: true,
                    message: ' Amount is required',
                  },
                })}
                error={errors?.amount?.message}
              />

              <Input
                label='Area'
                bordered
                {...register('area', {
                  required: {
                    value: true,
                    message: 'Area is required',
                  },
                })}
                error={errors?.area?.message}
              />
              <Input
                label='Bathroom'
                bordered
                {...register('bat', {
                  required: {
                    value: true,
                    message: 'Bathroom is required',
                  },
                })}
                error={errors?.area?.message}
              />
              <Input
                label='Bedroom'
                bordered
                {...register('bed', {
                  required: {
                    value: true,
                    message: 'Bedroom is required',
                  },
                })}
                error={errors?.area?.message}
              />

              <Select options={areas} label='Area' />

              <Select options={lgas} label='L.G.A' />

              <Button
                type='submit'
                className='mt-10'
                rightIcon={<IconCircleChevronRight />}
                onClick={() => setViews('image')}
              >
                {' '}
                Continue{' '}
              </Button>
            </form>
          </div>
        )}
        {views === 'image' && (
          <div>
            <div className='flex items-center justify-between mb-10 cursor-pointer'>
              <div
                onClick={() => setViews('form')}
                className='border border-black rounded-full p-1'
              >
                {' '}
                <IconChevronLeft />{' '}
              </div>
              <Button
                onClick={onClose}
                rounded-full
                size='sm'
                color='red'
                variant='outlined'
              >
                {' '}
                <IconX />{' '}
              </Button>
            </div>
            {!selectedFiles.length && (
              <div>
                <h3 className='text-xl'>Please upload property image</h3>
                <div
                  className='border border-black h-52 w-52 rounded-full mt-5 flex items-center justify-center cursor-pointer'
                  onClick={() => file.current.click()}
                >
                  <IconPlus size={50} />
                  <input
                    ref={file}
                    type='file'
                    multiple
                    accept='.jpg, .jpeg, .png, .gif'
                    className='hidden'
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <div className='grid grid-cols-2 gap-4'>
              {selectedFiles?.map((file, index) => (
                <div className='relative inline-block' key={index}>
                  <img
                    className='h-auto max-w-full rounded-lg'
                    key={index}
                    src={URL.createObjectURL(file)}
                    alt={`Image ${index}`}
                  />

                  <IconTrash
                    color='white'
                    onClick={() => handleImageRemove(file)}
                    className='absolute top-0 right-0 p-1 m-1 bg-red-500 rounded-full'
                  />
                </div>
              ))}
            </div>
            <Button
              type='submit'
              className='mt-10'
              rightIcon={<IconCircleChevronRight />}
              onClick={onSubmit}
            >
              {' '}
              Continue{' '}
            </Button>
          </div>
        )}
      </Drawer>
    </>
  )
}

export default AddNewProperty;