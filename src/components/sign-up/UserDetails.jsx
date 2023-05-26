import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "@/global/FormInput.jsx";
import useSignupStore from "@/store/signup";
import { useCheckUserMutation } from "@/api/rent";

const UserDetails = ({ onBack, onNext }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const { register, handleSubmit } = useForm({
    defaultValues: { ...data?.user },
  });
  const [error, setError] = useState(false);

  const { mutateAsync: checkUser, isLoading: isCheckUserLoading } =
    useCheckUserMutation();

  const submit = async (values) => {
    setError(false);
    updateData({ user: { ...values } });
    try {
      const payload = {
        phone: values.phone,
        email: null,
      };
      const res = await checkUser(payload);
      if (!!res.data.status) return onNext();
      setError(true);
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
          disabled={isCheckUserLoading}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70 pb-5">
        <p className="redirect-text text-cc-dark mb-1">
          Please provide your whatsapp phone number
        </p>
        <p
          className={`redirect-text text-white bg-danger error-text font-17 pb-0 ${
            error === true ? "d-block p-3" : "d-none"
          }`}
        >
          User with this number does not exist
        </p>{" "}
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          type="tel"
          label="Phone number"
          {...register("phone", { required: true })}
        />
        <button
          type="submit"
          className="font-17 d-flex call-number btn btn-blue"
          disabled={isCheckUserLoading}
        >
          {isCheckUserLoading ? "Please wait" : "Proceed"}
          {isCheckUserLoading ? (
            <span className="ml-3 spin">
              <i className="fa-solid fa-spinner"></i>
            </span>
          ) : (
            <></>
          )}
        </button>
        <div style={{ right: "-6rem" }} className="illustration-image">
          <img src="/assets/images/phone-in-hand.png" alt="" />
        </div>
      </form>
    </>
  );
};

export default UserDetails;
