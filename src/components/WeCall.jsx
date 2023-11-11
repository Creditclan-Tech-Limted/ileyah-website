import PostRequest from '@/app/listings/modals/PostRequest';
import useSignupStore from '@/store/signup';
import { IconChevronRight, IconHeadset, IconHomeSearch, IconListNumbers } from '@tabler/icons-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Drawer from './Drawer';

const WeCall = ({ onNext, handleToggle, isOpen, onClose }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [openFindHouse, setopenFindHouse] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.user },
  });

  const submit = async (values) => {
    handleToggle()
  };
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <div className="">
          <div className="position-relative">
            <button
              style={{ marginBottom: "0px" }}
              className="x sidebarCollapse"
              type="button"
              onClick={handleToggle}
            >
              <span aria-hidden="true">
                <i
                  style={{ fontSize: "1rem !important" }}
                  className="fa-solid fa-x"
                ></i>
              </span>
            </button>
          </div>
          <div className="pt-5">
            <p className="font-bold text-3xl text-primary leading-[1.1]">
              Not Satisfied?  <br />
            </p>
            <p className="text-cc-dark font-17">
              Please select from the options below?.
            </p>
          </div>

          <div className='mt-10 space-y-10'>
            <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={() => setopenFindHouse(true)}>
              <div className="flex">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                    <IconHomeSearch size="20" />
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    Fine Me a House
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    - Didn't get your choice? <br />
                    - Let's help you find a house in less than 48hrs.
                  </p>
                </div>
              </div>
              <div>
                <IconChevronRight className="text-black ml-auto" size="20" />
              </div>
            </div>

            <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={() => setopenFindHouse(true)}>
              <div className="flex">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center my-auto">
                    <IconHeadset size="20" />
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    Talk to an Advisor
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    - Lorem ipsum dolor sit amet consectetur. <br />
                    - We'll revert with response in less than 48hrs.
                  </p>
                </div>
              </div>
              <div>
                <IconChevronRight className="text-black ml-auto" size="20" />
              </div>
            </div>
          </div>
          <div style={{ right: "-6rem" }} className="illustration-image">
            <img src="/assets/images/phone-in-hand.png" width="100%" alt="" />
          </div>
        </div>
      </Drawer>
      <PostRequest isOpen={openFindHouse} onClose={() => setopenFindHouse(false)} />
    </>
  )
}

export default WeCall;