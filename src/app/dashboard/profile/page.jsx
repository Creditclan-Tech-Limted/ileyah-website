'use client'
import Button from "@/components/global/Button";
import Input from "@/global/Input";
import Select from "@/global/Select";
import TextArea from "@/global/TextArea";
import useSignupStore from "@/store/signup";
import { IconAddressBook, IconLock, IconUser, IconUserEdit } from "@tabler/icons-react";
import { useState } from "react";

const page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [views, setViews] = useState('bio-info');

  return (
    <>
      <p className="text-2xl font-bold">My Account</p>
      <div className="flex mt-10">
        <div className="items-startn w-[450px]">
          <div>
            <div className="flex">
              <img src="/assets/agent_register.jpeg" alt="profile-img" className="w-16 h-16 rounded-full" />
              <div className="ml-5 my-auto">
                <p className="font-medium"> {data?.user?.name} </p>
                <p className="font-medium text-gray-400"> {data?.user?.email} </p>
              </div>
            </div>

            <div className="mt-10">
              <div className={views === 'bio-info' ? ' bg-gray-200 flex p-5 rounded-full cursor-pointer font-bold' : "flex p-5 rounded-full cursor-pointer"} onClick={() => setViews('bio-info')}>
                <IconUser />
                <p className="ml-5">Bio Information</p>
              </div>
              <div className={views === 'address' ? ' bg-gray-200 flex p-5 rounded-full cursor-pointer !font-bold' : "flex p-5 rounded-full cursor-pointer"} onClick={() => setViews('address')}>
                <IconAddressBook />
                <p className="ml-5">Address</p>
              </div>
              <div className={views === 'security' ? ' bg-gray-200 flex p-5 rounded-full cursor-pointer' : "flex p-5 rounded-full cursor-pointer"} onClick={() => setViews('security')}>
                <IconLock />
                <p className="ml-5">Security</p>
              </div>
            </div>
          </div>
        </div>
        {
          views === 'bio-info' && (
            <div className="space-y-6 ml-20 w-full bg-white shadow px-16 py-10 rounded-2xl">
              <div className="flex my-10 justify-between">
                <p className="my-auto text-gray-500">Profile Picture</p>
                <img src="/assets/agent_register.jpeg" alt="profile-img" className="w-16 h-16 rounded-full" />
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Name</p>
                <p className="font-medium"> {data?.user?.name} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Email</p>
                <p className="font-medium"> {data?.user?.email} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Phone Number</p>
                <p className="font-medium"> {data?.user?.phone} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">BVN</p>
                <p className="font-medium"> {data?.user?.address || 'N/A'} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Gender</p>
                <p className="font-medium"> {data?.user?.address || 'N/A'} </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Date of Birth</p>
                <p className="font-medium"> <Input type='date' /> </p>
              </div>
              <Button leftIcon={<IconUserEdit />} className='border border-gray-400 bg-white text-black hover:!bg-gray-100 cursorMy Account'>Edit basic Details</Button>
            </div>
          )
        }
        {
          views === 'address' && (
            <div className="space-y-6 ml-20 w-full bg-white shadow px-16 py-10 rounded-2xl">
              <div className="space-y-6">
                <div className="flex space-x-5">
                  <p className="text-gray-500">Address</p>
                  <div className="w-full">
                    <TextArea />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Country</p>
                  <Select options={[1, 2, 3, 4]} />
                </div>
                <div className="flex justify-between">
                  <p>State</p>
                  <Select options={[1, 2, 3, 4]} />
                </div>
                <div className="flex justify-between">
                  <p>Landmark</p>
                  <Select options={[1, 2, 3, 4]} />
                </div>
              </div>
              <Button leftIcon={<IconUserEdit />} className='border border-gray-400 bg-white text-black hover:!bg-gray-100 cursorMy Account'>Edit Address</Button>
            </div>
          )
        }
        {
          views === 'security' && (
            <div className="space-y-6 ml-20 w-full bg-white shadow px-16 py-10 rounded-2xl">
              <div className="flex justify-between">
                <p>Password</p>
                <div className="w-2/3">
                  <Input type='password' />
                </div>
              </div>
              <div className="flex justify-between">
                <p>Confirm Password</p>
                <div className="w-2/3">
                  <Input type='password' />
                </div>
              </div>
              <Button leftIcon={<IconUserEdit />} className='border border-gray-400 bg-white text-black hover:!bg-gray-100'>Edit Password</Button>
            </div>
          )
        }
      </div>

      {/* <hr className="my-10" />


      <hr className="my-10" /> */}

    </>
  )
}

export default page;