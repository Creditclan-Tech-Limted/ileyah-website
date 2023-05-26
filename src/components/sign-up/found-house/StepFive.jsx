import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import { useForm } from "react-hook-form";

function StepFive({ onBack, onNext }) {
  const { data, updateData } = useSignupStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data?.foundHouse },
  });

  const submit = async ({ landlord_phone }) => {
    updateData({ foundHouse: { ...data?.foundHouse, landlord_phone } });
    onNext();
  };
 return (
    <>
      <div>
        <button
          style={ { marginBottom: "0px" } }
          className="back"
          type="button"
          onClick={ onBack }
        >
          <span aria-hidden="true">
            <i
              style={ { fontSize: "1rem !important" } }
              className="fa-solid fa-angle-left"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70 mb-4">
        <p className="redirect-text font-30 text-deep-blue font-weight-bold mb-0 pb-0">
          Kindly provide your landlord's phone number
        </p>
        <p
          className={`redirect-text text-white bg-danger error-text font-17 pb-0 ${
            errors?.landlord_phone?.message?.length ? "d-block p-3" : "d-none"
          }`}
        >
          {errors.landlord_phone?.message}
        </p>
      </div>
      <form onSubmit={ handleSubmit(submit) }>
        <FormInput
          type="number"
          label="Landlord Phone number"
          { ...register("landlord_phone", {
            required: true,
            pattern: {
              value: /(^0[789]\d{9}$)/,
              message: "Please enter a valid phone number",
            },
          }) }
        />
       <button type="submit" className="call-number btn btn-blue">
          Continue
        </button>
      </form>
      <button
        onClick={ onNext }
        type="submit"
        className="font-17 mt-3 call-number alt-plan pointer border-0 bg-transparent"
      >
        I don't know the number
      </button>
      <div className="illustration-image pt-5">
        <img src="/assets/images/Calling-amico.svg" alt=""/>
      </div>
    </>
  );
}

export default StepFive;
