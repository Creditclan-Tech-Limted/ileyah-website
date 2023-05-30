import { useCheckRentRequestMutation } from "@/api/rent";
import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import React from "react";
import { useForm } from "react-hook-form";

const UserDetails = ({ onBack, onNext }) => {
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
    updateData({ user: { ...values } });
    try {
      const res = await checkRentRequest(values.phone);
      if (!res.data.status) return onNext("step-two");
      updateData({ request: res.data.request });
      onNext("mini-summary");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <>
      <div>
        <button
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
          disabled={ischeckRentRequestLoading}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70 pb-3">
        <p className="redirect-text font-30 text-deep-blue font-weight-bold mb-1">
          We would like to know you
        </p>
        <p className="text-cc-dark font-17">
          Please provide the following information to proceed
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          type="text"
          label="Full name"
          {...register("full_name", { required: true })}
        />
        <p
          className={`redirect-text text-white bg-danger error-text font-17 pb-0 ${
            errors?.phone?.message?.length ? "d-block p-3" : "d-none"
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
  );
};

export default UserDetails;
