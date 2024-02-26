import UserInfor from '@/api/UserInfor'
import Drawer from '@/components/Drawer'
import Button from '@/components/global/Button'
import Input from '@/global/Input'
import { IconPlus } from '@tabler/icons-react'
import { useForm } from 'react-hook-form'
import { useToast } from '@/lib/use-toast'
import { useAddStaff } from '@/api/action'

const AddNewStaff = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { mutateAsync: add, isLoading: adding } = useAddStaff()


  const companyId = UserInfor().userId
  const toast = useToast()

  const onSubmit = async (data) => {
   
    try {
      const res = await add({
        data,
        companyId,
      })
      if (res?.data?.status) {
        toast.success(res?.data?.message)
        reset()
        onClose()
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Invite a Staff'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
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
            label='Email'
            bordered
            {...register('email', {
              required: {
                value: true,
                message: ' Email is required',
              },
            })}
            error={errors?.email?.message}
          />

          <Button type='submit' color='black' className='mt-10' leftIcon={<IconPlus />}>
           { adding ? 'Adding' : 'Invite Staff'}
          </Button>
        </form>
      </Drawer>
    </>
  )
}

export default AddNewStaff
