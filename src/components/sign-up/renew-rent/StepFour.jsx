import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import { useForm } from "react-hook-form";

function StepFour({ onBack, onNext }) {
  const { data, updateData } = useSignupStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.renew },
  });

  const submit = ({address}) => {
    updateData({ renew: { ...data?.renew, address } });
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
          Kindly provide your house address
        </p>
        <p
          className={`redirect-text text-white bg-danger error-text font-17 pb-0 ${
            errors?.address?.message?.length ? "d-block p-3" : "d-none"
          }`}
        >
          {errors.address?.message}
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          type="text"
          label="Address"
          {...register("address", {
            required: true,
            minLength: {
              value: 25,
              message: "Please provide a more detailed address",
            },
          })}
        />
        <button type="submit" className="call-number btn btn-blue">
          Continue
        </button>
      </form>
      <div className="illustration-image">
        <img src="/assets/images/Living room-rafiki.svg" alt="" />
      </div>
    </>
  );
}

export default StepFour;
