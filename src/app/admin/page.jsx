'use client'
import { useGetStaff } from '@/api/action'
import Button from '@/components/global/Button'
import SimpleDropdown from '@/global/SimpleDropdown'
import { IconChevronDown, IconChevronDownLeft, IconChevronRight, IconLogout, IconPlus } from '@tabler/icons-react'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'


const Admin = ({ className }) => {
  // localStorage.removeItem('ileyah_token');
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login')
  };
  return (
    <>
      <div className="flex">
        <div>
          <p className='text-2xl font-semibold'>Hi, Admin</p>
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
    </>
  )
}

export default Admin;