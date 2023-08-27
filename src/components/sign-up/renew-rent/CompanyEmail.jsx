import { useCheckRentRequestMutation } from "@/api/rent";
import FormInput from "@/global/FormInput";
import useSignupStore from "@/store/signup";
import { useForm } from "react-hook-form";

const CompanyEmail = ({ onBack, onNext }) => {
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
        <p className="text-4xl text-deep-blue font-bold mb-1">
          We would like have your offical email address
        </p>
        <p className="text-cc-dark font-17">
          Please provide the following information to proceed
        </p>
      </div>
      <form onSubmit={handleSubmit(submit)} className="mt-10">
        
        <FormInput
          type="email"
          label="Official Email address"
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

export default CompanyEmail;
