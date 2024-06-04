'use client'
import SimpleDropdown from '@/global/SimpleDropdown'
import { IconChevronDown, IconLogout } from '@tabler/icons-react'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'


const Admin = ({ className }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('ileyah_token');
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