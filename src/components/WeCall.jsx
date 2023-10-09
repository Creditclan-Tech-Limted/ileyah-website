import useSignupStore from '@/store/signup';
import { IconChevronRight, IconHeadset, IconListNumbers } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';

const WeCall = ({ onNext, handleToggle }) => {
  const { data, updateData } = useSignupStore((state) => state);

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
      <div className="sidebar active">
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
            Hello 🥳  <br />
          </p>
          <p className="text-cc-dark font-17">
            Please select from the options below?.
          </p>
        </div>

        <div className='mt-10 space-y-10'>
          <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100">
            <div className="flex">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                  <IconListNumbers size="20" />
                </div>
              </div>
              <div className="px-6">
                <p className="text-lg font-medium text-left">
                  Join our Waitlist
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

          <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100">
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
        
        {/* <form onSubmit={handleSubmit(submit)} className="mt-10">
          <FormInput
            type="text"
            label="Full name"
            {...register("full_name", { required: true })}
          />
          <p
            className={`bg-danger error-text font-17 pb-0 ${errors?.phone?.message?.length ? "block" : "hidden"
              }`}
          >
            {errors.phone?.message}
          </p>{" "}
          <FormInput
            type="tel"
            label="Phone number"
            {...register("phone", {
              required: true,
              pattern: {
                value: /(^0[789]\d{9}$)/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          <FormInput
            type="email"
            label="Email address"
            {...register("email", { required: true })}
          />
          <div className="flex">
            <button
              type="submit"
              className="font-17 flex call-number btn btn-blue"
              disabled={ischeckRentRequestLoading}
            >
              {ischeckRentRequestLoading ? "Please wait" : "Submit"}
              {ischeckRentRequestLoading ? (
                <span className="ml-3 spin">
                  <i className="fa-solid fa-spinner"></i>
                </span>
              ) : (
                <></>
              )}
            </button>
          </div>
        </form> */}
        <div style={{ right: "-6rem" }} className="illustration-image">
          <img src="/assets/images/phone-in-hand.png" width="100%" alt="" />
        </div>
      </div>
    </>
  )
}

export default WeCall;