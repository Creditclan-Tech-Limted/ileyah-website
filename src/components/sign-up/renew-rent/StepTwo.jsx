import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import { IconExclamationCircle } from "@tabler/icons-react";
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
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          type="number"
          label="Rent "
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
        <p
          className={`bg-red-100 rounded-xl text-red-800 ${errors?.amount?.message?.length ? "block p-3" : "hidden"
            }`}
        >
          <IconExclamationCircle className="inline-flex mr-2" />
          {errors.amount?.message}
        </p>
        <button type="submit" className="call-number btn btn-blue font-17 mt-10">
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