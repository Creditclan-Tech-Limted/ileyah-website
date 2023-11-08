import Drawer from '@/components/Drawer';
import TextArea from '@/global/TextArea';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Comments = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {

  }, [])

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title={'Comments'}>
        <TextArea
          label='Comment'
          {...register('address', {
            required: {
              value: true,
              message: 'Comment is required',
            },
          })}
          error={errors?.address?.message}
        />
      </Drawer>
    </>
  )
}

export default Comments;