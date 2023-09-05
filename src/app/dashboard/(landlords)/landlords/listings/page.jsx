'use client'
import Button from '@/components/global/Button'
import { IconBed, IconHeartFilled, IconMapPinFilled, IconPlus, IconBath } from '@tabler/icons-react'
import AddNewProperty from './Modals/AddNewProperty'
import useSignupStore from '@/store/signup'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import UserInfor from '@/api/UserInfor'
import { formatCurrency } from '@/lib/utils'

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [openAddNewStaff, setOpenAddNewStaff] = useState(false);
  const [property, setProperty] = useState([]);
  const userId = UserInfor().userId
  const [staff, setStaff] = useState({
    open: false,
    staff: ''
  });

  const handleClose = async () => {
    try {
      setOpenAddNewStaff(false)
    } catch (error) {
      console.log({ error });
    }
  }

  const fetchData = async () => {
    try {
      const res = await axios.post('https://kuda-creditclan-api.herokuapp.com/agents/getAgentProperty', { landlordAgentId: userId })
      return res?.data?.data
    } catch (error) {
      console.log({ error });
    }
  }

  const { data: userData, isLoading, error } = useQuery(['data'], fetchData);

  console.log(isLoading);

  const mergedArray = userData?.reduce((accumulator, currentObject) => {
    return accumulator.concat(currentObject.images);
  }, []);

  return (
    <>
      <div className='h-full'>
        <div className='flex justify-between'>
          <div>
            <div className='text-4xl font-bold'>
              Welcome, Landlord 👋🏿
            </div>
            <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, corporis </p>
          </div>
          <div>
            <Button onClick={() => setOpenAddNewStaff(true)} size='sm' leftIcon={<IconPlus />}>Add New Property</Button>
          </div>
        </div>

        <div className='mt-10 mb-10'>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            {userData?.map((user, i) => (
              <div className=' bg-white shadow-lg rounded-xl p-1'>
                <div className='bg-cover h-40 p-2' style={{ backgroundImage: `url(${user?.images[0]})`, borderRadius: '10px' }}>
                  <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                    Rent
                  </div>
                </div>
                <div className='p-3 space-y-2'>
                  <p className='font-bold text-xl flex justify-between'>
                    <div className='text-black'>{formatCurrency(user?.amount)} </div>
                    <div className='bg-red-100 p-2 rounded-full'><IconHeartFilled size='15' className='text-red-500' /></div>
                  </p>
                  <p className='font-bold'>  {user?.name}</p>
                  <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> Zenith Bank, VI </p>
                  <hr />
                  <p className='flex space-x-3'>
                    <div className='inline-flex'><IconBath /> 2 </div>
                    <div className='inline-flex'><IconBed /> 4 </div>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddNewProperty isOpen={openAddNewStaff} onClose={handleClose} />
    </>
  )
}

export default Page;