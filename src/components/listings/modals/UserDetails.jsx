import { useCheckRentRequestMutation } from '@/api/rent';
import FormInput from '@/global/FormInput';
import Input from '@/global/Input';
import useSignupStore from '@/store/signup';
import React from 'react'
import { useForm } from 'react-hook-form';

const UserDetails = () => {
  const { data, updateData } = useSignupStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.user },
  });

  const {
    mutateAsync: checkRentRequest,
    isLoading: ischeckRentRequestLoading,
  } = useCheckRentRequestMutation();

  const submit = async (values) => {
    try {
      console.log({ values });
    } catch (error) {

    }
  }
  return (
    <>
      <div className="pb-3">
        <p className="text-cc-dark font-17">
          Please provide the following information to proceed
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)} className="mt-10">
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

        <Input bordered />
        <div className="flex">
          <button
            type="submit"
            className="font-17 flex call-number btn btn-blue"
            disabled={ischeckRentRequestLoading}
          >
            {ischeckRentRequestLoading ? "Please wait" : "Proceed"}
            {ischeckRentRequestLoading ? (
              <span className="ml-3 spin">
                <i className="fa-solid fa-spinner"></i>
              </span>
            ) : (
              <></>
            )}
          </button>
        </div>
      </form>
    </>
  )
}

export default UserDetails;