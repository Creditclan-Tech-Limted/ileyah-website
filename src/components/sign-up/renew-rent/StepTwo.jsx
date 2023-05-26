import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import React from "react";
import { useForm } from "react-hook-form";

function StepTwo({ onBack, onNext }) {
  const { data, updateData } = useSignupStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.renew },
  });

  const submit = ({ amount }) => {
    updateData({ renew: { ...data?.renew, amount } });
    onNext();
  };

  return (
    <>
      <div>
        <button
          style={{ marginBottom: "0px" }}
          className="back"
          type="button"
          onClick={onBack}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70 mb-4">
        <p className="font-30 redirect-text text-deep-blue font-weight-bold pb-0 mb-0">
          How much is your rent
        </p>
        <p
          className={`redirect-text text-white bg-danger error-text font-17 pb-0 ${
            errors?.amount?.message?.length ? "d-block p-3" : "d-none"
          }`}
        >
          {errors.amount?.message}
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          type="number"
          label="Rent amount"
          {...register("amount", {
            required: true,
            min: {
              value: 100000,
              message: "Please provide an amount greater than ₦100,000",
            },
            max: {
              value: 3000000,
              message: "Please provide an amount less than ₦3million",
            },
          })}
        />
        <button type="submit" className="call-number btn btn-blue font-17">
          Continue
        </button>
      </form>

      <div className="illustration-image">
        <img src="/assets/images/Wallet-bro.svg" alt="" />
      </div>
    </>
  );
}

export default StepTwo;
