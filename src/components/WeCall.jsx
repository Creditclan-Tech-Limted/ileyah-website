import { useCheckRentRequestMutation } from '@/api/rent';
import FormInput from '@/global/FormInput'
import useSignupStore from '@/store/signup';
import { IconPhoneCall } from '@tabler/icons-react';
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

  const {
    mutateAsync: checkRentRequest,
    isLoading: ischeckRentRequestLoading,
  } = useCheckRentRequestMutation();

  const submit = async (values) => {
    handleToggle()
    // updateData({ user: { ...values } });
    // try {
    //   const res = await checkRentRequest(values.phone);
    //   if (!res.data.status) return onNext("step-two");
    //   updateData({ request: res.data.request });
    //   onNext("mini-summary");
    // } catch (e) {
    //   console.log({ e });
    // }
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
        <div className="pt-70">
          <p className="font-bold text-3xl text-primary leading-[1.1]">
            Let's call you 🥳  <br />
          </p>
          <p className="text-cc-dark font-17">
            Please provide the following information.
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
        </form>
        <div style={{ right: "-6rem" }} className="illustration-image">
          <img src="/assets/images/phone-in-hand.png" width="100%" alt="" />
        </div>
      </div>
    </>
  )
}

export default WeCall;