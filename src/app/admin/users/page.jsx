'use client'
import Button from '@/components/global/Button';
import SimpleDropdown from '@/global/SimpleDropdown'
import { IconChevronDown, IconLogout } from '@tabler/icons-react'
import axios from 'axios';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = ({ className }) => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleLogout = () => {
    router.push('/login')
  };

  const getAllUser = async () => {
    try {
      const res = await axios.get('https://kuda-creditclan-api.herokuapp.com/agents/agents');
      console.log(res?.data?.data);
      setUsers(res?.data?.data)
      setLoading(false)
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <>
      <div className="flex">
        <div>
          <p className='text-2xl font-semibold'>Users</p>
        </div>
        <div className='ml-auto'>
          <SimpleDropdown
            trigger={
              <div className="flex items-center">
                <img
                  src={`https://ui-avatars.com/api/?name=IL`}
                  className={classNames('w-8 h-8 rounded-full', className)}
                  alt={`IL`}
                />
                <IconChevronDown size="18" className="ml-3" />
              </div>
            }
            items={[
              { text: 'Logout', icon: <IconLogout size="18" />, onClick: handleLogout }
            ]}
          />
        </div>
      </div>

      {
        loading && (
          <div>
            loading...
          </div>
        )
      }

      <div className="grid grid-cols-2 gap-10 mt-10">
        {
          !loading && users?.map((user, i) => (
            <div className='bg-white shadow flex rounded-2xl p-3'>
              <div className='my-auto'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" width={100} />
              </div>
              <div className='my-auto'>
                <p>{user?.name}</p>
                <p>{user?.phone}</p>
                <p>{user?.email}</p>
                <p>{user?.createdAt.slice(0, 10)}</p>
              </div>
              <div className='my-auto ml-auto'>
              <Button variant='outlined' size='xs' className='mt-3'>Actions</Button>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default page;